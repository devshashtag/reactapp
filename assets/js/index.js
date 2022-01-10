//? global imports
import { getElement } from "/assets/js/global/utils.js";
import { dispalyCourses, displayBlogs } from "/assets/js/global/display.js";
import { renderDefaultTemplate } from "/assets/js/global/render.js";

//? specific imports
import courses from "/assets/js/data/courses.js";
import blogs from "/assets/js/data/blogs.js";

//* display items when page load
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

  // header, footer
  renderDefaultTemplate(document.body.innerHTML);
});
