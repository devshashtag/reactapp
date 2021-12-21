//? global imports
import { getElement } from "/assets/js/global/utils.js";
import { dispalyCourses, displayBlogs } from "/assets/js/global/display.js";

//? specific imports
import courses from "/assets/js/data/courses.js";
import blogs from "/assets/js/data/blogs.js";

//* get content elements
const fullCourses = getElement(".full__content");
const proposalCourses = getElement(".proposal__content");
const blogsContent = getElement(".blogs__content");

//* display items when page load
window.addEventListener("DOMContentLoaded", function () {
  displayFullCourses();
  displayProposalCourses();
  displayNewestBlogs();
});

//* functions
const displayFullCourses = () => {
  fullCourses.innerHTML = dispalyCourses(courses, "full");
};

const displayProposalCourses = () => {
  proposalCourses.innerHTML = dispalyCourses(courses, "proposal");
};

const displayNewestBlogs = () => {
  blogsContent.innerHTML = displayBlogs(blogs, 4);
};
