import { getElement } from "/assets/js/global/utils.js";
import { displayBlogs } from "/assets/js/global/display.js";

import { renderDefaultTemplate } from "/assets/js/global/render.js";

// blogs data
import blogs from "/assets/js/data/blogs.js";

//* runs when page load
window.addEventListener("DOMContentLoaded", function () {
  // header, footer
  renderDefaultTemplate(document.body.innerHTML);

  // code here
  //* get content element
  const blogsContent = getElement(".blogs__content");
  blogsContent.innerHTML = displayBlogs(blogs);
});
