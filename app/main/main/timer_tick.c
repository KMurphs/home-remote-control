#include "timer_tick.h"


TaskHandle_t timer_tick_Handle;

/*
 * Timer group0 ISR handler
 *
 * Note:
 * We don't call the timer API here because they are not declared with IRAM_ATTR.
 * If we're okay with the timer irq not being serviced while SPI flash cache is disabled,
 * we can allocate this interrupt without the ESP_INTR_FLAG_IRAM flag and use the normal API.
 */
void IRAM_ATTR timer_group0_isr(void *para)
{
    timer_spinlock_take(TIMER_GROUP_0);
    int timer_idx = (int) para;

    /* Retrieve the interrupt status and the counter value
       from the timer that reported the interrupt */
    uint32_t timer_intr = timer_group_get_intr_status_in_isr(TIMER_GROUP_0);
    uint64_t timer_counter_value = timer_group_get_counter_value_in_isr(TIMER_GROUP_0, timer_idx);

    /* Prepare basic event data
       that will be then sent back to the main program task */
    timer_event_t evt;
    evt.timer_group = 0;
    evt.timer_idx = timer_idx;
    evt.timer_counter_value = timer_counter_value;

    /* Clear the interrupt
       and update the alarm time for the timer with without reload */
    if (timer_intr & TIMER_INTR_T0) {
        evt.type = TICK_100_MS;

        heartbeat_handler();

        timer_group_clr_intr_status_in_isr(TIMER_GROUP_0, timer_idx);
    } else {
        evt.type = -1; // not supported even type
    }

    /* After the alarm has been triggered
      we need enable it again, so it is triggered the next time */
    timer_group_enable_alarm_in_isr(TIMER_GROUP_0, timer_idx);

    /* Now just send the event data back to the main program task */
    xQueueSendFromISR(timer_queue, &evt, NULL);
    timer_spinlock_give(TIMER_GROUP_0);
}

/*
 * Initialize selected timer of the timer group 0
 *
 * timer_idx - the timer number to initialize
 * auto_reload - should the timer auto reload on alarm?
 * timer_interval_sec - the interval of alarm to set
 */
static void example_tg0_timer_init(int timer_idx,
                                   bool auto_reload, double timer_interval_sec)
{
    /* Select and initialize basic parameters of the timer */
    timer_config_t config = {
        .divider = TIMER_DIVIDER,
        .counter_dir = TIMER_COUNT_UP,
        .counter_en = TIMER_PAUSE,
        .alarm_en = TIMER_ALARM_EN,
        .auto_reload = auto_reload,
    }; // default clock source is APB
    timer_init(TIMER_GROUP_0, timer_idx, &config);

    /* Timer's counter will initially start from value below.
       Also, if auto_reload is set, this value will be automatically reload on alarm */
    timer_set_counter_value(TIMER_GROUP_0, timer_idx, 0x00000000ULL);

    /* Configure the alarm value and the interrupt on alarm. */
    timer_set_alarm_value(TIMER_GROUP_0, timer_idx, timer_interval_sec * TIMER_SCALE);
    timer_enable_intr(TIMER_GROUP_0, timer_idx);
    timer_isr_register(TIMER_GROUP_0, timer_idx, timer_group0_isr,
                       (void *) timer_idx, ESP_INTR_FLAG_IRAM, NULL);

    timer_start(TIMER_GROUP_0, timer_idx);
}



void example_tg0_timer_resume(){
    timer_start(TIMER_GROUP_0, TIMER_0);
}
void example_tg0_timer_pause(){
    timer_pause(TIMER_GROUP_0, TIMER_0);
}
/*
 * The main task of this example program
 */
static void timer_example_evt_task(void *arg)
{
    while (1) {
        timer_event_t evt;
        xQueueReceive(timer_queue, &evt, portMAX_DELAY);

        /* Print information that the timer reported an event */
        if (evt.type == TICK_100_MS) {
            // printf("\n    Example timer with auto reload\n");
        } else {
            // printf("\n    UNKNOWN EVENT TYPE\n");
        }

    }
}

void reset_timer_tick(){
    reconfigure_heartbeat_led(HEARTBEAT_LED_ON_SECS, HEARTBEAT_LED_PERIOD_SECS);
    example_tg0_timer_init(TIMER_0, TICK_100_MS,    TIMER_TICK_INTERVAL_SEC);
}
void init_timer_tick(){
    timer_queue = xQueueCreate(10, sizeof(timer_event_t));
    reconfigure_heartbeat_led(HEARTBEAT_LED_ON_SECS, HEARTBEAT_LED_PERIOD_SECS);
    example_tg0_timer_init(TIMER_0, TICK_100_MS,    TIMER_TICK_INTERVAL_SEC);
    xTaskCreate(timer_example_evt_task, "timer_evt_task", 2048, NULL, 5, &timer_tick_Handle);
}
void pause_timer_tick(){
    force_state_heartbeat_led(true);
    example_tg0_timer_pause();
}

// https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/system/freertos.html
// Create the task, storing the handle.  Note that the passed parameter ucParameterToPass
// must exist for the lifetime of the task, so in this case is declared static.  If it was just an
// an automatic stack variable it might no longer exist, or at least have been corrupted, by the time
// the new task attempts to access it.
//  xTaskCreate( vTaskCode, "NAME", STACK_SIZE, &ucParameterToPass, tskIDLE_PRIORITY, &xHandle );