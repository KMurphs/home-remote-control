const togglingKeys = {
  
  muteState: false,
  
  setup: function(){


    // Handle Power Key
    powerKey.addEventListener('click', function(evt){
      if(powerKey.classList.contains('power-key--active')){
        powerKey.classList.remove('power-key--active');
      }else{
        powerKey.classList.add('power-key--active');
      }
    })


    // Handle Mute Key
    togglingKeys.muteState = false;

    muteKeys.forEach(function(element) {
      element.addEventListener('click', function(evt){
        togglingKeys.toggleMuteKeys(togglingKeys.muteState);
      })
    });





  },
  toggleMuteKeys: function(){
    
    togglingKeys.muteState = !togglingKeys.muteState;

    muteKeys.forEach(function(element) {  
      element.classList.remove('mute-key--active');
      if(togglingKeys.muteState){
        element.classList.add('mute-key--active');
      }
    });
  }
}