import courses from '/reactapp/assets/js/data/courses.js';
import { dispalyCourses } from '/reactapp/assets/js/modules/template.js';

window.addEventListener('DOMContentLoaded', function () {
  const coursesElm = document.querySelector('.courses__content');
  coursesElm.innerHTML = dispalyCourses(courses);
});
