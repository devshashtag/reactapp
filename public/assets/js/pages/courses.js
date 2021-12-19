//? global imports
import { getElement } from "../utils.js";

//? specific imports
import courses from "../data/courses.js";
import { dispalyCourses } from "../display.js";

//* get content element
const couresesContent = getElement(".courses__content");

window.addEventListener("DOMContentLoaded", function () {
  displayAllCourses();
});

const displayAllCourses = () => {
  couresesContent.innerHTML = dispalyCourses(courses);
};
