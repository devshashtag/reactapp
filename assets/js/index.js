//? global imports
import { getElement } from "/reactapp/assets/js/global/utils.js";
import {
  dispalyCourses,
  displayBlogs,
} from "/reactapp/assets/js/global/display.js";
import {
  topbarEvent,
  navbarEvent,
  sidebarEvent,
} from "/reactapp/assets/js/global/headerEvents.js";

//? specific imports
import courses from "/reactapp/assets/js/data/courses.js";
import blogs from "/reactapp/assets/js/data/blogs.js";

window.addEventListener("DOMContentLoaded", function () {
  // displayFullCourses
  const fullCourses = getElement(".full__content");
  fullCourses.innerHTML = dispalyCourses(courses, "full");

  // displayProposalCourses
  const proposalCourses = getElement(".proposal__content");
  proposalCourses.innerHTML = dispalyCourses(courses, "proposal");

  // displayNewestBlogs
  const blogsContent = getElement(".blogs__content");
  blogsContent.innerHTML = displayBlogs(blogs, 4);

  // Header Events
  topbarEvent();
  navbarEvent();
  sidebarEvent();
});
