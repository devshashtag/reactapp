import { getElement, toggleClasses, baseUrl } from "/assets/js/global/utils.js";
import {
  topbarTemplate,
  navbarTemplate,
  sidebarTemplate,
} from "/assets/js/global/display.js";

// navigation urls data
import { route } from "/assets/js/data/route.js";

// default variables
// document name
let doc_name = baseUrl(document.location.pathname);
let options = { topbar: true };

// event functions
function topbarEvent() {
  // topbar search toggle
  const searchToggle = getElement(".topbar__search--toggle");
  const navbar = getElement(".navbar");

  // display search-form in navbar
  searchToggle.addEventListener("click", () => {
    toggleClasses(searchToggle, "fa-search", "fa-close");
    navbar.classList.toggle("search--active");
  });
}

function navbarEvent() {
  // navbar toggle for sidebar
  const sidebar = getElement(".sidebar");
  const bodyWrapper = getElement(".body--wrap");
  const bodyOverlay = getElement(".body--overlay");
  const navbarToggle = getElement(".navbar--toggle");

  // display sidebar
  navbarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("is-active");
    navbarToggle.classList.toggle("is-active");
    bodyWrapper.classList.toggle("wrap");
    document.body.classList.toggle("overflow--hidden");
  });

  // hide sidebar when clicking .body--overlay
  bodyOverlay.addEventListener("click", () => {
    sidebar.classList.remove("is-active");
    navbarToggle.classList.remove("is-active");
    bodyWrapper.classList.remove("wrap");
    document.body.classList.remove("overflow--hidden");
  });
}

function sidebarEvent() {
  // check clicking on sidebar__list
  let sidebarList = getElement(".sidebar__list");
  // if click on dropdown toggle. show dropdown__list
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

// check options in route items
function checkOptions(items) {
  for (let item of items) {
    if (item.topbar === false && baseUrl(item.url) == doc_name) {
      options.topbar = false;
      return;
    }

    if (item.type === "dropdown") {
      checkOptions(item.data);
    }
  }
}

// check if topbar disabled in routes
checkOptions(route);

// create templates before pages loads
const header = {
  navbar: {
    template: navbarTemplate(route),
    event: navbarEvent,
  },

  sidebar: {
    template: sidebarTemplate(route),
    event: sidebarEvent,
  },
};

// options header
if (options.topbar) {
  header.topbar = {
    template: topbarTemplate(),
    event: topbarEvent,
  };
}

export { header };
