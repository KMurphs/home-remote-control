#ifndef HEARTBEAT_H
#define HEARTBEAT_H

#include "driver/gpio.h"
#include "timer_tick.h"

#define HEARTBEAT_LED 2
#define HEARTBEAT_LED_ON_SECS 0.2f
#define HEARTBEAT_LED_PERIOD_SECS 1.0f


void init_heartbeat(float on_secs, float period_secs);
void heartbeat_handler();
void reconfigure_heartbeat_led(float on_secs, float period_secs);

typedef struct {
    int gpio_pin;
    int on_ticks;  
    int period_ticks;  
    int tick_counter;
    // void (*handler)();
} heartbeat_control_t;
static heartbeat_control_t heartbeat_control; 




#endif