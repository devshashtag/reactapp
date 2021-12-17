//? global imports
import { getElement, dispalyCourses } from "./utils.js";

//? specific imports
import courses from "./data/courses.js";

//* get content elements
const fullCourses = getElement(".full__content");
const proposalCourses = getElement(".proposal__content");

//* display items when page load
window.addEventListener("DOMContentLoaded", function () {
  fullCourses.innerHTML = dispalyCourses(courses, "full");
  proposalCourses.innerHTML = dispalyCourses(courses, "proposal");
});
