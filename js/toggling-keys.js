const togglingKeys = {
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
    let muteState = false;

    muteKeys.forEach(function(element) {
      element.addEventListener('click', function(evt){
        muteState = !muteState;
        toggleMuteKeys(muteState);
      })
    });

    function toggleMuteKeys(muteState){
      muteKeys.forEach(function(element) {
        element.classList.remove('mute-key--active');
        if(muteState){
          element.classList.add('mute-key--active');
        }
      });
    }



  }
}