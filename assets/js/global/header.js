// global imports 
import { getElement, toggleClasses } from "./utils.js";

let topbarEvents = () => { 
  // navbar toggle for sidebar
  const searchToggle = getElement(".topbar__search--toggle");
  const navbar = getElement(".navbar");

  // display search form in navbar
  searchToggle.addEventListener('click', () => {
    toggleClasses(searchToggle, "fa-search", "fa-close");
    navbar.classList.toggle("search--active");
  });
};

let navbarEvents = () => {
  // navbar toggle for sidebar
  const sidebar        = getElement(".sidebar");
  const sidebarWrap    = getElement(".sidebar--wrap");
  const sidebarOverlay = getElement(".sidebar--overlay");
  const navbarToggle   = getElement(".navbar--toggle");

  // navbar toggle event to toggle sidebar
  navbarToggle.addEventListener('click', () => {
    sidebar.classList.toggle("is-active");
    navbarToggle.classList.toggle("is-active");
    sidebarWrap.classList.toggle("wrap");
    document.body.classList.toggle("overflow--hidden");
  });

  // hide sidebar when clicking sidebar--overlay
  sidebarOverlay.addEventListener('click', () => {
    sidebar.classList.remove("is-active");
    navbarToggle.classList.remove("is-active");
    sidebarWrap.classList.remove("wrap");
    document.body.classList.remove("overflow--hidden");
  });
}

let sidebarEvents = () => {
  // sidebar dropdown toggle for navigations
  const DropdownToggle = getElement(".sidebar__dropdown--toggle");
  const DropdownNav    = getElement(".sidebar__dropdown__nav");

  // display dropdown
  DropdownToggle.addEventListener('click', () => {
    toggleClasses(DropdownToggle, "is-active", "fa-angle-left", "fa-angle-down");
    DropdownNav.classList.toggle("is-active");
  });
}

let headerEvents = () => {
  topbarEvents();
  navbarEvents();
  sidebarEvents();
}

export { headerEvents, topbarEvents, navbarEvents, sidebarEvents}

