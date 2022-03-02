import { getElement, toggleClasses } from "/assets/js/global/utils.js";

// Default Variables

// top bar
// topbar search toggle
const searchToggle = getElement(".topbar__search--toggle");
const navbar = getElement(".navbar");

// navbar
// navbar toggle for sidebar
const sidebar = getElement(".sidebar");
const bodyWrapper = getElement(".body--wrap");
const bodyOverlay = getElement(".body--overlay");
const navbarToggle = getElement(".navbar--toggle");

// sidebar
// check clicking on sidebar__list
let sidebarList = getElement(".sidebar__list");

// Event functions
function topbarEvent() {
  // display search-form in navbar while clicking topbar__search--toggle
  searchToggle.addEventListener("click", () => {
    toggleClasses(searchToggle, "fa-search", "fa-close");
    navbar.classList.toggle("search--active");
  });
}

function navbarEvent() {
  // while clicking on .navbar--toggle display .sidebar
  navbarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("is-active");
    navbarToggle.classList.toggle("is-active");
    bodyWrapper.classList.toggle("wrap");
    document.body.classList.toggle("overflow--hidden");
  });

  // hide sidebar while clicking .body--overlay
  bodyOverlay.addEventListener("click", () => {
    sidebar.classList.remove("is-active");
    navbarToggle.classList.remove("is-active");
    bodyWrapper.classList.remove("wrap");
    document.body.classList.remove("overflow--hidden");
  });
}

function sidebarEvent() {
  // while clicking on dropdown toggle display .dropdown__list
  sidebarList.addEventListener("click", (el) => {
    if (el.target.classList.contains("sidebar__dropdown--toggle")) {
      let toggle = el.target;
      const dropdownList =
        toggle.parentNode.parentNode.querySelector(".dropdown__list");
      // display dropdown__list
      toggleClasses(toggle, "is-active", "fa-angle-left", "fa-angle-down");
      dropdownList.classList.toggle("is-active");
    }
  });
}

export { topbarEvent, navbarEvent, sidebarEvent };
