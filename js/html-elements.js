const activateMainViewElmt = document.querySelector("#activate-main-view");
const activateKeypadViewElmt = document.querySelector("#activate-keypad-view");
const mainViewElmt = document.querySelector(".app-content--main-view");
const keypadViewElmt = document.querySelector(".app-content--with-keypad");
const loaderElmt = document.querySelector("#app-loader");
const appContent = document.querySelector(".app-content");
const appContentContainer = document.querySelector(".app-content-container");
const appRoot = document.querySelector(".app-root");
const appAlertElemt = document.querySelector(".app-alerts");
const appAlertText = document.querySelector(".app-alerts .text");
const appAlertIcon = document.querySelector(".app-alerts .icon");
const appAlertClose = document.querySelector(".app-alerts .close");


const powerKey = document.querySelector(".power-key");
const muteKeys = document.querySelectorAll(".mute-key"); // There is more than one mute key