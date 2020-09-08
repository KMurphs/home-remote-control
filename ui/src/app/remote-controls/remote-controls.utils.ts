import { TButtonControlData } from '../button-control/button-control.type';



export type TButtonsData = {
  defaultDelayOnKeyPress: number,
  mainButtons: TButtonControlData[]
  numericButtons: TButtonControlData[]
  coloredButtons: TButtonControlData[]
  managementButtons: TButtonControlData[]
  VolumeChannelsButtons: TButtonControlData[]
}

// https://material.io/resources/icons/?search=import&style=baseline
export const buttonsData: TButtonsData = {
  defaultDelayOnKeyPress: 0,
  mainButtons: [
    { keyCode: "KEY_TOOLS",   color: "",        icon: "build",              text: "Tool",   ariaLabel: "Tools Key",   ariaHidden: false, scaleFactor: 1,   cssClass: ".btn-red" },
    { keyCode: "KEY_UP",      color: "",        icon: "arrow_drop_up",      text: "Up",     ariaLabel: "Up Key",      ariaHidden: false, scaleFactor: 1.7, cssClass: "btn-black" },
    { keyCode: "KEY_INFO",    color: "",        icon: "info",               text: "Info",   ariaLabel: "Info Key",    ariaHidden: false, scaleFactor: 1,   cssClass: ".btn-red" },
    { keyCode: "KEY_LEFT",    color: "",        icon: "arrow_left",         text: "Left",   ariaLabel: "Left Key",   ariaHidden: false, scaleFactor: 1.7,  cssClass: "btn-black" },
    { keyCode: "KEY_ENTER",   color: "",        icon: "center_focus_strong",text: "Enter",  ariaLabel: "Enter Key", ariaHidden: false, scaleFactor: 1,    cssClass: "btn-green" },
    { keyCode: "KEY_RIGHT",   color: "",        icon: "arrow_right",        text: "Right",  ariaLabel: "Right Key",  ariaHidden: false, scaleFactor: 1.7,  cssClass: "btn-black" },
    { keyCode: "KEY_RETURN",  color: "",        icon: "backspace",          text: "Return", ariaLabel: "Return Key", ariaHidden: false, scaleFactor: 1,    cssClass: ".btn-red" },
    { keyCode: "KEY_DOWN",    color: "",        icon: "arrow_drop_down",    text: "Down",   ariaLabel: "Down Key",   ariaHidden: false, scaleFactor: 1.7,  cssClass: "btn-black" },
    { keyCode: "KEY_RETURN",  color: "",        icon: "close",              text: "Exit",   ariaLabel: "Exit Key",   ariaHidden: false, scaleFactor: 1,    cssClass: ".btn-red" },
    { keyCode: "",            color: "",        icon: "",                   text: "",       ariaLabel: "",            ariaHidden: false, scaleFactor: 1, cssClass: ".btn-red" },
    { keyCode: "KEY_HOME",    color: "",        icon: "home",               text: "Home",   ariaLabel: "Home Key",   ariaHidden: false, scaleFactor: 1,    cssClass: "btn-orange" },
    { keyCode: "",            color: "",        icon: "",                   text: "",       ariaLabel: "",            ariaHidden: false, scaleFactor: 1, cssClass: ".btn-red" }
  ],
  managementButtons: [
    // { keyCode: "",            color: "",        icon: "",                   text: "",       ariaLabel: "",            ariaHidden: false, scaleFactor: 1, cssClass: ".btn-red" },
    // { keyCode: "",            color: "",        icon: "",                   text: "",       ariaLabel: "",            ariaHidden: false, scaleFactor: 1, cssClass: ".btn-red" },
    // { keyCode: "",            color: "",        icon: "",                   text: "",       ariaLabel: "",            ariaHidden: false, scaleFactor: 1, cssClass: ".btn-red" },
    { keyCode: "KEY_POWER",   color: "",        icon: "settings_power",     text: "Off",    ariaLabel: "Tools Key",   ariaHidden: false, scaleFactor: 1, cssClass: "btn-red" },
    { keyCode: "KEY_MENU",    color: "",        icon: "menu",               text: "Menu",   ariaLabel: "Up Key",      ariaHidden: false, scaleFactor: 1, cssClass: ".btn-red" },
    { keyCode: "KEY_SOURCE",  color: "",        icon: "input",              text: "Source", ariaLabel: "Info Key",    ariaHidden: false, scaleFactor: 1, cssClass: "btn-green" },
    { keyCode: "KEY_DTV",     color: "",        icon: "tv",                 text: "TV",     ariaLabel: "Left Key",    ariaHidden: false, scaleFactor: 1, cssClass: ".btn-red" },
    { keyCode: "KEY_HDMI",    color: "",        icon: "settings_input_hdmi",text: "HDMI",   ariaLabel: "Source Key",  ariaHidden: false, scaleFactor: 1, cssClass: ".btn-red" },
    { keyCode: "KEY_CONTENTS",color: "",        icon: "device_hub",         text: "Hub",    ariaLabel: "Right Key",   ariaHidden: false, scaleFactor: 1, cssClass: ".btn-red" },
  ],
  numericButtons: [
    // { keyCode: "",        color: "",        icon: "",                    text: "",       ariaLabel: "",            ariaHidden: false, scaleFactor: 1, cssClass: ".btn-number" },
    // { keyCode: "",        color: "",        icon: "",                    text: "",       ariaLabel: "",            ariaHidden: false, scaleFactor: 1, cssClass: ".btn-number" },
    // { keyCode: "",        color: "",        icon: "",                    text: "",       ariaLabel: "",            ariaHidden: false, scaleFactor: 1, cssClass: ".btn-number" },
    // { keyCode: "",        color: "",        icon: "",                    text: "",       ariaLabel: "",            ariaHidden: false, scaleFactor: 1, cssClass: ".btn-number" },
    // { keyCode: "",        color: "",        icon: "",                    text: "",       ariaLabel: "",            ariaHidden: false, scaleFactor: 1, cssClass: ".btn-number" },
    // { keyCode: "",        color: "",        icon: "",                    text: "",       ariaLabel: "",            ariaHidden: false, scaleFactor: 1, cssClass: ".btn-number" },
    { keyCode: "KEY_1",   color: "",        icon: "",                    text: "1",      ariaLabel: "Tools Key",   ariaHidden: false, scaleFactor: 1, cssClass: ".btn-number" },
    { keyCode: "KEY_2",   color: "",        icon: "",                    text: "2",      ariaLabel: "Tools Key",   ariaHidden: false, scaleFactor: 1, cssClass: ".btn-number" },
    { keyCode: "KEY_3",   color: "",        icon: "",                    text: "3",      ariaLabel: "Tools Key",   ariaHidden: false, scaleFactor: 1, cssClass: ".btn-number" },
    { keyCode: "KEY_4",   color: "",        icon: "",                    text: "4",      ariaLabel: "Tools Key",   ariaHidden: false, scaleFactor: 1, cssClass: ".btn-number" },
    { keyCode: "KEY_5",   color: "",        icon: "",                    text: "5",      ariaLabel: "Tools Key",   ariaHidden: false, scaleFactor: 1, cssClass: ".btn-number" },
    { keyCode: "KEY_6",   color: "",        icon: "",                    text: "6",      ariaLabel: "Tools Key",   ariaHidden: false, scaleFactor: 1, cssClass: ".btn-number" },
    { keyCode: "KEY_7",   color: "",        icon: "",                    text: "7",      ariaLabel: "Tools Key",   ariaHidden: false, scaleFactor: 1, cssClass: ".btn-number" },
    { keyCode: "KEY_8",   color: "",        icon: "",                    text: "8",      ariaLabel: "Tools Key",   ariaHidden: false, scaleFactor: 1, cssClass: ".btn-number" },
    { keyCode: "KEY_9",   color: "",        icon: "",                    text: "9",      ariaLabel: "Tools Key",   ariaHidden: false, scaleFactor: 1, cssClass: ".btn-number" },
    { keyCode: "",        color: "",        icon: "",                    text: "",       ariaLabel: "",            ariaHidden: false, scaleFactor: 1, cssClass: ".btn-number" },
    { keyCode: "KEY_0",   color: "",        icon: "",                    text: "0",      ariaLabel: "Tools Key",   ariaHidden: false, scaleFactor: 1, cssClass: ".btn-number" },
  ],
  coloredButtons: [
    { keyCode: "",          color: "",        icon: "",                    text: "",       ariaLabel: "",            ariaHidden: false, scaleFactor: 1, cssClass: ".btn-red" },
    { keyCode: "",          color: "",        icon: "",                    text: "",       ariaLabel: "",            ariaHidden: false, scaleFactor: 1, cssClass: ".btn-red" },
    { keyCode: "",          color: "",        icon: "",                    text: "",       ariaLabel: "",            ariaHidden: false, scaleFactor: 1, cssClass: ".btn-red" },
    // { keyCode: "",          color: "",        icon: "",                    text: "",       ariaLabel: "",            ariaHidden: false, scaleFactor: 1, cssClass: ".btn-red" },
    // { keyCode: "",          color: "",        icon: "",                    text: "",       ariaLabel: "",            ariaHidden: false, scaleFactor: 1, cssClass: ".btn-red" },
    // { keyCode: "",          color: "",        icon: "",                    text: "",       ariaLabel: "",            ariaHidden: false, scaleFactor: 1, cssClass: ".btn-red" },
    { keyCode: "",          color: "",        icon: "",                    text: "",       ariaLabel: "",            ariaHidden: false, scaleFactor: 1, cssClass: ".btn-red" },
    { keyCode: "KEY_RED",   color: "",        icon: "",                    text: "A",      ariaLabel: "Tools Key",   ariaHidden: false, scaleFactor: 1, cssClass: "btn-red" },
    { keyCode: "KEY_GREEN", color: "",        icon: "",                    text: "B",      ariaLabel: "Tools Key",   ariaHidden: false, scaleFactor: 1, cssClass: "btn-green" },
    { keyCode: "",          color: "",        icon: "",                    text: "",       ariaLabel: "",            ariaHidden: false, scaleFactor: 1, cssClass: ".btn-red" },
    { keyCode: "KEY_YELLOW",color: "",        icon: "",                    text: "C",      ariaLabel: "Tools Key",   ariaHidden: false, scaleFactor: 1, cssClass: "btn-yellow" },
    { keyCode: "KEY_BLUE",  color: "",        icon: "",                    text: "D",      ariaLabel: "Tools Key",   ariaHidden: false, scaleFactor: 1, cssClass: "btn-blue" },
  ],
  VolumeChannelsButtons: [
    // { keyCode: "",            color: "",        icon: "",                    text: "",         ariaLabel: "",            ariaHidden: false, scaleFactor: 1, cssClass: ".btn-red" },
    // { keyCode: "",            color: "",        icon: "",                    text: "",         ariaLabel: "",            ariaHidden: false, scaleFactor: 1, cssClass: ".btn-red" },
    // { keyCode: "",            color: "",        icon: "",                    text: "",         ariaLabel: "",            ariaHidden: false, scaleFactor: 1, cssClass: ".btn-red" },

    { keyCode: "KEY_CHUP",    color: "",        icon: "arrow_left",          text: "Ch Up",    ariaLabel: "Left Key",    ariaHidden: false, scaleFactor: 1.7, cssClass: ".btn-red" },
    { keyCode: "KEY_CH_LIST", color: "",        icon: "list",                text: "Ch List",  ariaLabel: "Source Key",  ariaHidden: false, scaleFactor: 1,   cssClass: ".btn-red" },
    { keyCode: "KEY_CHDOWN",  color: "",        icon: "arrow_right",         text: "Ch Down",  ariaLabel: "Right Key",   ariaHidden: false, scaleFactor: 1.7, cssClass: ".btn-red" },
    
    { keyCode: "KEY_MUTE",    color: "",        icon: "volume_off",         text: "Mute",     ariaLabel: "Up Key",      ariaHidden: false, scaleFactor: 1, cssClass: "color-purple" },
    { keyCode: "KEY_VOLDOWN", color: "",        icon: "volume_down",         text: "Vol Down", ariaLabel: "Info Key",    ariaHidden: false, scaleFactor: 1, cssClass: "color-purple" },
    { keyCode: "KEY_VOLUP",   color: "",        icon: "volume_up",           text: "Vol Up",   ariaLabel: "Tools Key",   ariaHidden: false, scaleFactor: 1, cssClass: "color-purple" },

  ]
}




// https://github.com/Ape/samsungctl
// KEY_POWEROFF	Power off
// KEY_UP	Up
// KEY_DOWN	Down
// KEY_LEFT	Left
// KEY_RIGHT	Right
// KEY_CHUP	P Up
// KEY_CHDOWN	P Down
// KEY_ENTER	Enter
// KEY_RETURN	Return
// KEY_CH_LIST	Channel List
// KEY_MENU	Menu
// KEY_SOURCE	Source
// KEY_GUIDE	Guide
// KEY_TOOLS	Tools
// KEY_INFO	Info
// KEY_RED	A / Red
// KEY_GREEN	B / Green
// KEY_YELLOW	C / Yellow
// KEY_BLUE	D / Blue
// KEY_PANNEL_CHDOWN	3D
// KEY_VOLUP	Volume Up
// KEY_VOLDOWN	Volume Down
// KEY_MUTE	Mute
// KEY_0	0
// KEY_1	1
// KEY_2	2
// KEY_3	3
// KEY_4	4
// KEY_5	5
// KEY_6	6
// KEY_7	7
// KEY_8	8
// KEY_9	9
// KEY_DTV	TV Source
// KEY_HDMI	HDMI Source
// KEY_CONTENTS	SmartHub