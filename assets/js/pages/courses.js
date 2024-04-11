import courses from '/assets/js/data/courses.js';
import { dispalyCourses } from '/assets/js/modules/template.js';

window.addEventListener('DOMContentLoaded', function () {
  const coursesElm = document.querySelector('.courses__content');
  coursesElm.innerHTML = dispalyCourses(courses);
});
