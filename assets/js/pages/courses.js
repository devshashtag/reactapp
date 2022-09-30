//? global imports
import { getElement } from "/reactapp/assets/js/global/utils.js";
import { dispalyCourses } from "/reactapp/assets/js/global/display.js";
import {
  topbarEvent,
  navbarEvent,
  sidebarEvent,
} from "/reactapp/assets/js/global/headerEvents.js";

//? specific imports
import courses from "/reactapp/assets/js/data/courses.js";

window.addEventListener("DOMContentLoaded", function () {
  //* display courses
  const couresesContent = getElement(".courses__content");
  couresesContent.innerHTML = dispalyCourses(courses);

  // Header Events
  topbarEvent();
  navbarEvent();
  sidebarEvent();
});
