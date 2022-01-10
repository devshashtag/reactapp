import { renderDefaultTemplate } from "/assets/js/global/render.js";

//* runs when page load
window.addEventListener("DOMContentLoaded", function () {
  // header, footer
  renderDefaultTemplate(document.body.innerHTML);

  // code here
});
