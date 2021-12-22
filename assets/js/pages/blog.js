//? global imports
import { getElement } from "/assets/js/global/utils.js";
import { displayBlogs } from "/assets/js/global/display.js";

//? specific imports
import blogs from "/assets/js/data/blogs.js";

//* get content element
const blogsContent = getElement(".blogs__content");

//* display items when page load
window.addEventListener("DOMContentLoaded", function () {
  displayAllBlogs();
});

//* functions
const displayAllBlogs = () => {
  blogsContent.innerHTML = displayBlogs(blogs);
};
