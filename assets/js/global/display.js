import { separate } from "./utils.js";

const dispalyCourses = (data = [], type = "title") => {
  const filterItems = data.filter((item) => item[type]);

  const displayItems = filterItems
    .map((item) => {
      return ` <article class="course-card">
  <div class="course-card__header">
    <a href=${item.url ? item.url : "#"}>
    <img src='${item.image}' alt='${item.title}' />
    </a>
    <div class='header__icon' >
    <i class="fas fa-play"></i>
    <i class="fas fa-user-plus"></i>
    </div>
  </div>
  <div class="course-card__content">
    <h3 class="content__title">
    <a href=${item.url ? item.url : "#"}>
    ${item.title}
    </a>
    </h3>
    <div class="content__author">
    <i class="fas fa-chalkboard-teacher"></i>
    <a href='#'>${item.author}</a>
    </div>
  </div>
  <div class="course-card__footer">
  <div class="footer__student">
  <i class="fas fa-users"></i>
  <span>${separate(item.students)}</span>
  </div>
    <div class="footer__price">
    <span>${item.price ? separate(item.price) : "رایگان!"}</span>
    </div>
  </div>
  </article>`;
    })
    .join("");

  return displayItems;
};

const displayBlogs = (data = [], value) => {
  const displayItmes = data
    .slice(0, value)
    .map((item) => {
      return `<article class="blog-card">
  <a href=${item.url ? item.url : "#"}>
  <img
    src="${item.image}"
    alt="${item.name}"
    class="blog-card__img"
     />
  </a>
  <h3 class="blog-card__title">
  <a href=${item.url ? item.url : "#"}>
  ${item.title}
  </a>
  </h3>
  <a href=${item.url ? item.url : "#"} class="blog-card__btn">بیشتر بخوانید</a>
</article>`;
    })
    .join("");
  return displayItmes;
};

export {
  // courses
  dispalyCourses,
  // blog
  displayBlogs,
};
