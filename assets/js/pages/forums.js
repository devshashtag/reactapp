import { renderDefaultTemplate } from "/assets/js/global/render.js";

//* runs when page load
window.addEventListener("DOMContentLoaded", function () {
  // code here

  // header, footer
  renderDefaultTemplate(document.body.innerHTML);
});
