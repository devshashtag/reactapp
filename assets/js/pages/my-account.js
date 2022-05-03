import { getElement } from "/assets/js/global/utils.js";
import { topbarEvent, navbarEvent, sidebarEvent } from "/assets/js/global/headerEvents.js";

//* runs when page load
window.addEventListener("DOMContentLoaded", function () {
  // code here
  // toggles
  const changerLogin = getElement(".changer--login");
  const changerRegister = getElement(".changer--register");

  // forms
  const accountLogin = getElement(".wrapper__login");
  const accountRegister = getElement(".wrapper__register");

  // callbacks
  function accountCB() {
    accountLogin.classList.toggle("is-active");
    accountRegister.classList.toggle("is-active");
  }

  changerLogin.addEventListener("click", accountCB);
  changerRegister.addEventListener("click", accountCB);

  // Header Events
  topbarEvent();
  navbarEvent();
  sidebarEvent();
});
