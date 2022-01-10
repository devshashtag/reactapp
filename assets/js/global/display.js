import { separate, baseUrl } from "./utils.js";

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

// header templates

//# header navigation templates
// current page url
let doc_name = baseUrl(document.location.pathname);

// templates
// if {current page url} == {a item in navbar} then {disable it}
// anchor template
const linkTemplate = (item) =>
  `\n<a ${
    baseUrl(item.url).includes(doc_name) ? `class="is-active" ` : ``
  }href="${item.url}">${item.title}</a>\n`;
// list item template
const listTemplate = (item) => `\n<li>${linkTemplate(item)}</li>\n`;
// nav dropdown template
const dropdownTemplate = (item, angle, toggle_for) => {
  // use angle-down for navbar
  // use angle-left for sidebar
  let icon_classes = `
    ${toggle_for ? `${toggle_for}__dropdown--toggle ` : ``}
    fa fa-angle-${angle? `left` : `down`}
  `;

  let dropdown = `
    <!-- dropdown template -->
    <li class="list__dropdown">
      <div class="dropdown__header">
        ${linkTemplate(item)}
        <i class="${icon_classes}"></i>
      </div>
      <ul class="dropdown__list">
        ${item.data.map(listTemplate).join("")}
      </ul>
    </li>
  `;

  return dropdown;
};

const topbarTemplate = () => {
  const topbar = `
  <!-- start topbar -->
  <div class="topbar no-select">
    <ul class="topbar__links">
      <li>
        <a class="topbar__link" href="/pages/about-us.html">درباره ما</a>
      </li>
      <li>
        <a class="topbar__link" href="/pages/contact.html">تماس با ما</a>
      </li>
    </ul>
    <div class="topbar__icons">
      <div class="topbar__icon topbar__search">
        <i class="topbar__search--toggle fa fa-search" aria-hidden="true"></i>
      </div>
      <div class="topbar__icon topbar__bag">
        <a href="#"><i class="fa fa-shopping-bag" aria-hidden="true"></i></a>
      </div>
      <div class="topbar__icon topbar__perm">
        <a href="/pages/my-account.html"><i class="fas fa-user" aria-hidden="true"></i></a>
      </div>
    </div>
  </div>
  <!-- end topbar -->
  `;

  return topbar;
};

const navbarTemplate = (route) => {
  const navbar = `
  <!-- start navbar -->
  <div class="navbar no-select">
    <!-- navbar search -->
    <div class="navbar__search">
      <form class="search__form" role="search" method="get" action="/">
        <input class="search-input" type="search" name="s" placeholder="جستجوی دوره، استاد، مطالب و ...">
        <button class="search-submit" type="submit">
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
    </div>
    <!-- navbar menu -->
    <nav class="navbar__menu">
      <!-- menu list -->
      <ul class="menu__list">
        ${route
          .map((item) => {
            return item.type == "dropdown"
              ? dropdownTemplate(item)
              : listTemplate(item);
          })
          .join("")}
      </ul>
      <!-- menu button -->
      <a class="menu__account" href="/pages/my-account.html">
        <i class="account__icon fa fa-user-lock">&nbsp;</i> ورود و ثبت نام
      </a>
    </nav>
    <!-- navbar brand -->
    <div class="navbar__brand">
      <!-- brand image -->
      <div class="brand__img">
        <a href="/">
          <img src="/assets/images/navbar/brand.png" alt="reactapp brand">
        </a>
      </div>
      <!-- sidebar toggle in navbar as toggle -->
      <div class="navbar--toggle">
        <div class="toggle__top"></div>
        <div class="toggle__mid"></div>
        <div class="toggle__btm"></div>
      </div>
    </div>
  </div>
  <!-- end navbar -->
  `;

  return navbar;
};

const sidebarTemplate = (route) => {
  const sidebar = `
    <!-- start sidebar -->
    <div class="sidebar no-select">
      <!-- sidebar search -->
      <div class="sidebar__search">
        <form class="search__form" role="search" method="get" action="/">
          <input class="search-field" type="search" name="s" placeholder="ورود واژه کلیدی...">
          <button class="search-submit" type="submit">
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </form>
      </div>

      <!-- sidebar navigation -->
      <nav class="sidebar__nav">
        <ul class="sidebar__list">
          ${route
            .map((item) => {
              return item.type == "dropdown"
                ? dropdownTemplate(item, "left", "sidebar")
                : listTemplate(item);
            })
            .join("")}
        </ul>
      </nav>
    </div>
    <!-- end sidebar -->
  `;

  return sidebar;
};

const bodyWrapperTemplate = (template) => {
  const bodyWrapper = `
    <!-- start body wrapper -->
    <div class="body--wrap">
      <!-- overlay all elements -->
      <div class="body--overlay"></div>
      ${template}
    </div>
    <!-- end body wrapper -->
    `;

  return bodyWrapper;
};

export {
  // courses
  dispalyCourses,
  // blog
  displayBlogs,
  // header
  topbarTemplate,
  navbarTemplate,
  sidebarTemplate,
  bodyWrapperTemplate,
};
