//? global imports
//? global imports
import { headerInit } from "/assets/js/global/header.js";
import { getElement } from "/assets/js/global/utils.js";

//? specific imports


window.addEventListener("DOMContentLoaded", function () {

  headerInit(); // header
  // toggles
  const changerLogin    = getElement(".changer--login");
  const changerRegister = getElement(".changer--register");
  // forms
  const accountLogin    = getElement(".wrapper__login");
  const accountRegister = getElement(".wrapper__register");
  // callbacks
  function accountCB() {
    accountLogin.classList.toggle("is-active");
    accountRegister.classList.toggle("is-active");
  }

  changerLogin.addEventListener("click", accountCB);
  changerRegister.addEventListener("click", accountCB);
});

