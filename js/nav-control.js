const navControls = {
  activateMainView: function(){
    mainViewElmt.classList.contains("d-none") && mainViewElmt.classList.remove("d-none");
    !keypadViewElmt.classList.contains("d-none") && keypadViewElmt.classList.add("d-none");
    
    !activateMainViewElmt.classList.contains("app-button--nav--active") && activateMainViewElmt.classList.add("app-button--nav--active");
    activateKeypadViewElmt.classList.contains("app-button--nav--active") && activateKeypadViewElmt.classList.remove("app-button--nav--active");
  },
  activateKeypadView: function(){
    keypadViewElmt.classList.contains("d-none") && keypadViewElmt.classList.remove("d-none");
    !mainViewElmt.classList.contains("d-none") && mainViewElmt.classList.add("d-none");
    
    !activateKeypadViewElmt.classList.contains("app-button--nav--active") && activateKeypadViewElmt.classList.add("app-button--nav--active");
    activateMainViewElmt.classList.contains("app-button--nav--active") && activateMainViewElmt.classList.remove("app-button--nav--active");
  },


  
  setup: function(){
    if(!mainViewElmt || !keypadViewElmt || !activateMainViewElmt || !activateKeypadViewElmt) return;

    navControls.activateMainView();

    activateMainViewElmt.addEventListener('click', function(evt) {navControls.activateMainView();});
    activateKeypadViewElmt.addEventListener('click', function(evt) {navControls.activateKeypadView();});
  }
}