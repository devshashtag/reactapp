//? global imports
import { getElement } from "/assets/js/global/utils.js";
import { dispalyCourses, displayBlogs } from "/assets/js/global/display.js";
import { headerInit } from "/assets/js/global/header.js"

//? specific imports
import courses from "/assets/js/data/courses.js";
import blogs from "/assets/js/data/blogs.js";

//* display items when page load
window.addEventListener("DOMContentLoaded", function () {
  displayFullCourses();
  displayProposalCourses();
  displayNewestBlogs();

  // header
  headerInit();
});

//* functions
const displayFullCourses = () => {
  const fullCourses = getElement(".full__content");
  fullCourses.innerHTML = dispalyCourses(courses, "full");
};

const displayProposalCourses = () => {
  const proposalCourses = getElement(".proposal__content");
  proposalCourses.innerHTML = dispalyCourses(courses, "proposal");
};

const displayNewestBlogs = () => {
  const blogsContent = getElement(".blogs__content");
  blogsContent.innerHTML = displayBlogs(blogs, 4);
};
