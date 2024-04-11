import blog from '/reactapp/assets/js/data/blog.js';
import { displayBlogs } from '/reactapp/assets/js/modules/template.js';

window.addEventListener('DOMContentLoaded', function () {
  const blogElm = document.querySelector('.blogs__content');
  blogElm.innerHTML = displayBlogs(blog);
});
