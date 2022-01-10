import { getElement } from "/assets/js/global/utils.js";
import { renderDefaultTemplate } from "/assets/js/global/render.js";

//* runs when page load
window.addEventListener("DOMContentLoaded", function () {
  // header, footer
  renderDefaultTemplate(document.body.innerHTML);

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
});
