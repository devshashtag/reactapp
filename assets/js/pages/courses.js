//? global imports
import { getElement } from "/assets/js/global/utils.js";
import { dispalyCourses } from "/assets/js/global/display.js";

//? specific imports
import courses from "/assets/js/data/courses.js";

//* get content element
const couresesContent = getElement(".courses__content");

window.addEventListener("DOMContentLoaded", function () {
  displayAllCourses();
});

const displayAllCourses = () => {
  couresesContent.innerHTML = dispalyCourses(courses);
};
