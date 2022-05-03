
import { topbarEvent, navbarEvent, sidebarEvent } from "/assets/js/global/headerEvents.js";

//* runs when page load
window.addEventListener("DOMContentLoaded", function () {
  // code here

  // Header Events
  topbarEvent();
  navbarEvent();
  sidebarEvent();
});
