import blogs from '/reactapp/assets/js/data/blog.js';
import courses from '/reactapp/assets/js/data/courses.js';

import { dispalyCourses, displayBlogs } from '/reactapp/assets/js/modules/template.js';

window.addEventListener('DOMContentLoaded', function () {
  // displayFullCourses
  const fullCourses = document.querySelector('.full__content');
  fullCourses.innerHTML = dispalyCourses(courses, 'full');

  // displayProposalCourses
  const proposalCourses = document.querySelector('.proposal__content');
  proposalCourses.innerHTML = dispalyCourses(courses, 'proposal');

  // displayNewestBlogs
  const blogsContent = document.querySelector('.blogs__content');
  blogsContent.innerHTML = displayBlogs(blogs, 4);
});
