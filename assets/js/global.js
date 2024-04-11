import { topbarEvent, navbarEvent, sidebarEvent } from '/reactapp/assets/js/modules/events.js';

window.addEventListener('DOMContentLoaded', function () {
  // Header Events
  topbarEvent();
  navbarEvent();
  sidebarEvent();
});
