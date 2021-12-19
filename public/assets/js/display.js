import { separate } from "./utils.js";

const dispalyCourses = (data = [], type = "title") => {
  const filterItems = data.filter((item) => item[type]);

  const displayItems = filterItems
    .map((item) => {
      return ` <article class="course">
  <div class="course__header">
    <img src='${item.image}' alt='${item.title}' />
    <div class='header__icon' >
    <i class="fas fa-play "></i>
    <i class="fas fa-user  "></i>
    </div>
  </div>
  <div class="course__content">
    <h3 class="content__title">${item.title}</h3>
    <div class="content__author">
    <i class="fas fa-chalkboard-teacher"></i>
    <span>${item.author}</span></div>
  </div>
  <div class="course__footer">
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
      return `<article class="blog">
  <img
    src="${item.image}"
    alt="${item.name}"
    class="blog__img"
  />
  <h3 class="blog__title">
  ${item.title}
  </h3>
  <button class="blog__btn">بیشتر بخوانید</button>
</article>`;
    })
    .join("");
  return displayItmes;
};

export { dispalyCourses, displayBlogs };
