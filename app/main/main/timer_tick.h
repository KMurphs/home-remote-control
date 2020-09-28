#ifndef TIMER_TICK_H
#define TIMER_TICK_H

#include <stdio.h>
#include "esp_types.h"
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "freertos/queue.h"
#include "driver/periph_ctrl.h"
#include "driver/timer.h"

#include "heartbeat.h"
// #include "alarm.h"
// #include "clock.h"
// #include "sampling.h"
// #include "diagnostics_led.h"


#define TIMER_DIVIDER         16  //  Hardware timer clock divider
#define TIMER_SCALE           (TIMER_BASE_CLK / TIMER_DIVIDER)  // convert counter value to seconds
#define TIMER_TICK_INTERVAL_SEC   (0.1) // sample test interval for the first timer
#define TICK_100_MS      1        // testing will be done with auto reload

/*
 * A sample structure to pass events
 * from the timer interrupt handler to the main program.
 */
typedef struct {
    int type;  // the type of timer's event
    int timer_group;
    int timer_idx;
    uint64_t timer_counter_value;
} timer_event_t;

xQueueHandle timer_queue;


void init_timer_tick();
void pause_timer_tick();
void reset_timer_tick();

#endif