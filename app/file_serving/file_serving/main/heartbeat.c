#include "heartbeat.h"


void heartbeat_handler(){

    //Update counter
    heartbeat_control.tick_counter--;
    if(heartbeat_control.tick_counter <= 0){
        heartbeat_control.tick_counter = heartbeat_control.period_ticks;
    }

    // update gpio pin
    if(heartbeat_control.tick_counter <= heartbeat_control.on_ticks){
        gpio_set_level(heartbeat_control.gpio_pin, 1);
    }else{
        gpio_set_level(heartbeat_control.gpio_pin, 0);
    }

}   


void reconfigure_heartbeat_led(float on_secs, float period_secs){
    heartbeat_control.on_ticks      = on_secs / TIMER_TICK_INTERVAL_SEC;  
    heartbeat_control.period_ticks  = period_secs / TIMER_TICK_INTERVAL_SEC;     
    heartbeat_control.tick_counter  = 0;
}


void init_heartbeat(float on_secs, float period_secs){

    printf("Initializing Heartbeat...\n");

    heartbeat_control.gpio_pin      = HEARTBEAT_LED;

    reconfigure_heartbeat_led(on_secs, period_secs);

    gpio_pad_select_gpio(HEARTBEAT_LED);
    gpio_set_direction(HEARTBEAT_LED, GPIO_MODE_OUTPUT);
}


