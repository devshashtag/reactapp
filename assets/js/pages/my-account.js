import { getElement } from "/reactapp/assets/js/global/utils.js";
import {
  topbarEvent,
  navbarEvent,
  sidebarEvent,
} from "/reactapp/assets/js/global/headerEvents.js";

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
