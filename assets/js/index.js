//? global imports
import { getElement } from "./utils.js";

//? specific imports
import courses from "./data/courses.js";
import blogs from "./data/blogs.js";

import { dispalyCourses, displayBlogs } from "./display.js";

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


//* sidebar & navbar
const sidebarToggle = getElement(".sidebar--toggle");
// const sidebarToggle = getElement(".sidebar")

//* display sidebar
sidebarToggle.addEventListener('click', () => {
  sidebarToggle.classList.toggle("is-active");
  // sidebar.classList.toggle("is-active");
});

