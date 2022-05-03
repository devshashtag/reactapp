//? global imports
import { getElement } from "/assets/js/global/utils.js";
import { dispalyCourses } from "/assets/js/global/display.js";
import { topbarEvent, navbarEvent, sidebarEvent } from "/assets/js/global/headerEvents.js";

//? specific imports
import courses from "/assets/js/data/courses.js";

window.addEventListener("DOMContentLoaded", function () {
  //* display courses
  const couresesContent = getElement(".courses__content");
  couresesContent.innerHTML = dispalyCourses(courses);

  // Header Events
  topbarEvent();
  navbarEvent();
  sidebarEvent();
});
