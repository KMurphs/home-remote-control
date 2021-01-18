const appAlert = {
  render: function(text, cssClass, icon){
    
    appAlertIcon.innerHTML = icon;
    appAlertText.innerHTML = `<p>${text}</p>`;
    

    appAlertElemt.classList.add("app-alerts--active");
    appAlertElemt.classList.add(cssClass);

    function appAlertCloseElemt(){
      appAlertElemt.classList.remove("app-alerts--active");
      appAlertElemt.classList.remove(cssClass);
    }


    appAlertClose.addEventListener('click', appAlertCloseElemt);
    setTimeout(appAlertCloseElemt, 5000);
  },
  danger: function(text){
    appAlert.render(text, "app-alerts--danger", "<i class=\"fas fa-times-circle\"></i>");
  },
  warning: function(text){
    appAlert.render(text, "app-alerts--warning", "<i class=\"fas fa-exclamation-triangle\"></i>");
  },
  info: function(text){
    appAlert.render(text, "app-alerts--info", "<i class=\"fas fa-info-circle\"></i>");
  },
  success: function(text){
    appAlert.render(text, "app-alerts--success", "<i class=\"fas fa-check-circle\"></i>");
  }
}