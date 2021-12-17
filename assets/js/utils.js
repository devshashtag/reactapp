const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `please check '${selection}' selector, no such element exist`
  );
};

const dispalyCourses = (data = [], type = "title") => {
  const filterItems = data.filter((item) => item[type]);

  const displayItems = filterItems
    .map((item) => {
      return ` <article class="course">
<div class="course__header">
  <img src=${item.image} alt=${item.title} />
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
<span>${item.students}</span>
</div>
  <div class="footer__price">
  <span>${item.price}</span>
  </div>
</div>
</article>`;
    })
    .join("");

  return displayItems;
};

export { getElement, dispalyCourses };
