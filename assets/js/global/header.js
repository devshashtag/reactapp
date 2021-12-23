// global imports 
import { getElement, toggleClasses } from "./utils.js";
import { topbarTemplate, navbarTemplate, sidebarTemplate, bodyWrapperTemplate } from "/assets/js/global/display.js";
// 
import { route } from "/assets/js/data/route.js";

const topbarEvents = () => { 
  // navbar toggle for sidebar
  const searchToggle = getElement(".topbar__search--toggle");
  const navbar = getElement(".navbar");

  // display search form in navbar
  searchToggle.addEventListener('click', () => {
    toggleClasses(searchToggle, "fa-search", "fa-close");
    navbar.classList.toggle("search--active");
  });
};

const navbarEvents = () => {
  // navbar toggle for sidebar
  const sidebar      = getElement(".sidebar");
  const bodyWrapper  = getElement(".body--wrap");
  const bodyOverlay  = getElement(".body--overlay");
  const navbarToggle = getElement(".navbar--toggle");

  // navbar toggle event to toggle sidebar
  navbarToggle.addEventListener('click', () => {
    sidebar.classList.toggle("is-active");
    navbarToggle.classList.toggle("is-active");
    bodyWrapper.classList.toggle("wrap");
    document.body.classList.toggle("overflow--hidden");
  });

  // hide sidebar when clicking sidebar--overlay
  bodyOverlay.addEventListener('click', () => {
    sidebar.classList.remove("is-active");
    navbarToggle.classList.remove("is-active");
    bodyWrapper.classList.remove("wrap");
    document.body.classList.remove("overflow--hidden");
  });
}

const sidebarEvents = () => {
  let sidebarList = getElement(".sidebar__list");

  // if click on dropdown toggle. show dropdown list
  sidebarList.addEventListener('click', (el) => {
    if(el.target.classList.contains("sidebar__dropdown--toggle")){
      let toggle = el.target;
      const dropdownList = toggle.parentNode.parentNode.querySelector(".dropdown__list");
      // toggle
      toggleClasses(toggle, "is-active", "fa-angle-left", "fa-angle-down");
      dropdownList.classList.toggle("is-active");
    }
  });
}


const sidebar = sidebarTemplate(route);
const navbar  = navbarTemplate(route);
const topbar  = topbarTemplate();

// header
const headerInit = () => {
  // templates
  let htmlTemplate = `
  ${sidebar}
  ${bodyWrapperTemplate(`
    ${topbar}
    ${navbar}
    ${document.body.innerHTML}
  `)}`;
  // set template
  document.body.innerHTML = htmlTemplate;

  // events
  topbarEvents();
  navbarEvents();
  sidebarEvents();
}

export { headerInit };

