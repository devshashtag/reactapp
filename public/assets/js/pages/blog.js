//? global imports
import { getElement } from "../utils.js";

//? specific imports
import blogs from "../data/blogs.js";
import { displayBlogs } from "../display.js";

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
