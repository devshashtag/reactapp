import { getElement } from "/reactapp/assets/js/global/utils.js";
import { displayBlogs } from "/reactapp/assets/js/global/display.js";
import {
  topbarEvent,
  navbarEvent,
  sidebarEvent,
} from "/reactapp/assets/js/global/headerEvents.js";

// blogs data
import blogs from "/reactapp/assets/js/data/blogs.js";

window.addEventListener("DOMContentLoaded", function () {
  // code here
  //* get content element
  const blogsContent = getElement(".blogs__content");
  blogsContent.innerHTML = displayBlogs(blogs);

  // Header Events
  topbarEvent();
  navbarEvent();
  sidebarEvent();
});
