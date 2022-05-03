import { getElement } from "/assets/js/global/utils.js";
import { displayBlogs } from "/assets/js/global/display.js";
import { topbarEvent, navbarEvent, sidebarEvent } from "/assets/js/global/headerEvents.js";

// blogs data
import blogs from "/assets/js/data/blogs.js";

//* runs when page load
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
