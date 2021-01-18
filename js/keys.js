const keys = {
  setup: function(wsObj){
    document.querySelectorAll("button.app-button").forEach(function(elmt){
      
      if(elmt.classList.contains("app-button--nav")) return;

      elmt.addEventListener('click', function(evt){
        const keyCode = elmt.getAttribute('data-keycode');
        wsObj.applyKey(keyCode);
        console.log("[" + new Date().toISOString() + "] Key Pressed: " + keyCode);
      })
    }) 
  }
}