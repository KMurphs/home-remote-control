const navControls = {
  activateMainView: function(){
    mainViewElmt.classList.contains("app-content--hidden") && mainViewElmt.classList.remove("app-content--hidden");
    !keypadViewElmt.classList.contains("app-content--hidden") && keypadViewElmt.classList.add("app-content--hidden");
    
    !activateMainViewElmt.classList.contains("app-button--nav--active") && activateMainViewElmt.classList.add("app-button--nav--active");
    activateKeypadViewElmt.classList.contains("app-button--nav--active") && activateKeypadViewElmt.classList.remove("app-button--nav--active");
  },
  activateKeypadView: function(){
    keypadViewElmt.classList.contains("app-content--hidden") && keypadViewElmt.classList.remove("app-content--hidden");
    !mainViewElmt.classList.contains("app-content--hidden") && mainViewElmt.classList.add("app-content--hidden");
    
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