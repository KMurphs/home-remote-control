const Key = {
	POWEROFF: "KEY_POWEROFF",
	UP: "KEY_UP",
	DOWN: "KEY_DOWN",
	LEFT: "KEY_LEFT",
	RIGHT: "KEY_RIGHT",
	CHUP: "KEY_CHUP",
	CHDOWN: "KEY_CHDOWN",
	ENTER: "KEY_ENTER",	
	RETURN: "KEY_RETURN",	
	CH_LIST: "KEY_CH_LIST",
	MENU: "KEY_MENU",	
	SOURCE: "KEY_SOURCE",
	GUIDE: "KEY_GUIDE",
	TOOLS: "KEY_TOOLS",
	INFO: "KEY_INFO",		
	RED: "KEY_RED",
	GREEN: "KEY_GREEN",	
	YELLOW: "KEY_YELLOW",	
	BLUE: "KEY_BLUE",
	PANNEL_CHDOWN: "KEY_PANNEL_CHDOWN",
	VOLUP: "KEY_VOLUP",
	VOLDOWN: "KEY_VOLDOWN",
	MUTE: "KEY_MUTE",
	0: "KEY_0",
	1: "KEY_1",
	2: "KEY_2",
	3: "KEY_3",
	4: "KEY_4",
	5: "KEY_5",
	6: "KEY_6",
	7: "KEY_7",
	8: "KEY_8",
	9: "KEY_9",
	DTV: "KEY_DTV",
	HDMI: "KEY_HDMI",
	CONTENTS: "KEY_CONTENTS"
}
Object.freeze(Key)





const keys = {
	main: [
    { code: "KEY_TOOLS",	scaleFactor: 1,		cssClass: "",		icon: "build",              text: "Tool",		 },
		{ code: "KEY_UP",			scaleFactor: 1,		cssClass: "",		icon: "arrow_drop_up",      text: "Up",			 },
    { code: "KEY_INFO",		scaleFactor: 1,		cssClass: "",		icon: "info",               text: "Info",		 },
    { code: "KEY_LEFT",		scaleFactor: 1,		cssClass: "",		icon: "arrow_left",         text: "Left",		 },
    { code: "KEY_ENTER",	scaleFactor: 1,		cssClass: "",		icon: "center_focus_strong",text: "Enter",		},
    { code: "KEY_RIGHT",	scaleFactor: 1,		cssClass: "",		icon: "arrow_right",        text: "Right",		},
    { code: "KEY_RETURN",	scaleFactor: 1,		cssClass: "",		icon: "backspace",          text: "Return",	 },
    { code: "KEY_DOWN",		scaleFactor: 1,		cssClass: "",		icon: "arrow_drop_down",    text: "Down",		 },
    { code: "KEY_RETURN",	scaleFactor: 1,		cssClass: "",		icon: "close",              text: "Exit",		 },
    { code: "",						scaleFactor: 1,		cssClass: "",		icon: "",                   text: "",				 },
    { code: "KEY_HOME",		scaleFactor: 1,		cssClass: "",		icon: "home",               text: "Home",		 },
    { code: "",						scaleFactor: 1,		cssClass: "",		icon: "",                   text: "",				 }
  ],
  management: [
    { code: "KEY_POWER",	  scaleFactor: 1,		cssClass: "",		icon: "build",              text: "Tool",		 },
		{ code: "KEY_MENU",		  scaleFactor: 1,		cssClass: "",		icon: "arrow_drop_up",      text: "Up",			 },
    { code: "KEY_SOURCE",	  scaleFactor: 1,		cssClass: "",		icon: "info",               text: "Info",		 },
    { code: "KEY_DTV",		  scaleFactor: 1,		cssClass: "",		icon: "arrow_left",         text: "Left",		 },
    { code: "KEY_HDMI",		  scaleFactor: 1,		cssClass: "",		icon: "center_focus_strong",text: "Enter",		},
    { code: "KEY_CONTENTS",	scaleFactor: 1,		cssClass: "",		icon: "arrow_right",        text: "Right",		},
  ],
  numeric: [
    { code: "KEY_1",				scaleFactor: 1,		cssClass: "",		icon: "build",              text: "Tool",		 },
    { code: "KEY_2",				scaleFactor: 1,		cssClass: "",		icon: "build",              text: "Tool",		 },
    { code: "KEY_3",				scaleFactor: 1,		cssClass: "",		icon: "build",              text: "Tool",		 },
    { code: "KEY_4",				scaleFactor: 1,		cssClass: "",		icon: "build",              text: "Tool",		 },
    { code: "KEY_5",				scaleFactor: 1,		cssClass: "",		icon: "build",              text: "Tool",		 },
    { code: "KEY_6",				scaleFactor: 1,		cssClass: "",		icon: "build",              text: "Tool",		 },
    { code: "KEY_7",				scaleFactor: 1,		cssClass: "",		icon: "build",              text: "Tool",		 },
    { code: "KEY_8",				scaleFactor: 1,		cssClass: "",		icon: "build",              text: "Tool",		 },
    { code: "KEY_9",				scaleFactor: 1,		cssClass: "",		icon: "build",              text: "Tool",		 },
    { code: "",							scaleFactor: 1,		cssClass: "",		icon: "build",              text: "Tool",		 },
    { code: "KEY_0",				scaleFactor: 1,		cssClass: "",		icon: "build",              text: "Tool",		 },
  ],
  colored: [
    { code: "",							scaleFactor: 1,		cssClass: "",		icon: "build",              text: "Tool",		 },
    { code: "KEY_RED",			scaleFactor: 1,		cssClass: "",		icon: "build",              text: "Tool",		 },
    { code: "KEY_GREEN",		scaleFactor: 1,		cssClass: "",		icon: "build",              text: "Tool",		 },
    { code: "",							scaleFactor: 1,		cssClass: "",		icon: "build",              text: "Tool",		 },
    { code: "KEY_YELLOW",		scaleFactor: 1,		cssClass: "",		icon: "build",              text: "Tool",		 },
		{ code: "KEY_BLUE",			scaleFactor: 1,		cssClass: "",		icon: "build",              text: "Tool",		 },
  ],
  volume_channel: [
    { code: "KEY_MUTE",			scaleFactor: 1,		cssClass: "",		icon: "build",              text: "Tool",		 },
    { code: "KEY_VOLDOWN",	scaleFactor: 1,		cssClass: "",		icon: "build",              text: "Tool",		 },
    { code: "KEY_VOLUP",		scaleFactor: 1,		cssClass: "",		icon: "build",              text: "Tool",		 },
    { code: "KEY_CHUP",			scaleFactor: 1,		cssClass: "",		icon: "build",              text: "Tool",		 },
    { code: "KEY_CH_LIST",	scaleFactor: 1,		cssClass: "",		icon: "build",              text: "Tool",		 },
		{ code: "KEY_CHDOWN",		scaleFactor: 1,		cssClass: "",		icon: "build",              text: "Tool",		 },
  ]
}