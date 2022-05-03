//? global imports
import { getElement } from "/assets/js/global/utils.js";
import { dispalyCourses, displayBlogs } from "/assets/js/global/display.js";
import { topbarEvent, navbarEvent, sidebarEvent } from "/assets/js/global/headerEvents.js";

//? specific imports
import courses from "/assets/js/data/courses.js";
import blogs from "/assets/js/data/blogs.js";

//? display items when page load
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
