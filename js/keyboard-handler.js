keyboardHandler = {
  setup: function(webSocketObj, muteKeyCb){
    
    if(!webSocketObj) return;

    document.addEventListener('keydown', function(evt){
      
      // console.log(evt.key)
      
      switch(evt.key){
 

        // Sound
        case "m": webSocketObj.applyKey("KEY_MUTE"); muteKeyCb && muteKeyCb(); break;
        case "+": 
        case "u": 
          webSocketObj.applyKey("KEY_VOLUP"); 
          break;
        case "-": 
        case "d": 
          webSocketObj.applyKey("KEY_VOLDOWN"); 
          break;
        
        
        // Motion
        case "ArrowUp": webSocketObj.applyKey("KEY_UP"); break;
        case "ArrowDown": webSocketObj.applyKey("KEY_DOWN"); break;
        case "ArrowLeft": webSocketObj.applyKey("KEY_LEFT"); break;
        case "ArrowRight": webSocketObj.applyKey("KEY_RIGHT"); break;
        case "Enter": webSocketObj.applyKey("KEY_ENTER"); break;
        case "Backspace": 
        case "Escape": 
        case "r": 
          webSocketObj.applyKey("KEY_RETURN"); 
          break;

        case "s": webSocketObj.applyKey("KEY_SOURCE"); break;
        case "h":
        case "Home": 
          webSocketObj.applyKey("KEY_HOME"); 
          break;

        // keypad
        case "0": webSocketObj.applyKey("KEY_0"); break;
        case "1": webSocketObj.applyKey("KEY_1"); break;
        case "2": webSocketObj.applyKey("KEY_2"); break;
        case "3": webSocketObj.applyKey("KEY_3"); break;
        case "4": webSocketObj.applyKey("KEY_4"); break;
        case "5": webSocketObj.applyKey("KEY_5"); break;
        case "6": webSocketObj.applyKey("KEY_6"); break;
        case "7": webSocketObj.applyKey("KEY_7"); break;
        case "8": webSocketObj.applyKey("KEY_8"); break;
        case "9": webSocketObj.applyKey("KEY_9"); break;


        // Channels
        case "p": webSocketObj.applyKey("KEY_CHDOWN"); break;
        case "l": webSocketObj.applyKey("KEY_CHLIST"); break;
        case "n": webSocketObj.applyKey("KEY_CHUP"); break;

        // Main controls
        case "i": webSocketObj.applyKey("KEY_INFO"); break;
        case "t": webSocketObj.applyKey("KEY_TOOLS"); break;
        case "NumLock": webSocketObj.applyKey("KEY_POWEROFF"); break;

        default: console.warn(`Unsupported Key '${evt.key}'`); break;
      }
    })
  }
}