// global imports 
import { getElement, separate, toggleClasses } from "./utils.js";

export let sidebarEvents = () => {
  // navbar toggle
  const sidebar        = getElement(".sidebar");
  const sidebarToggle  = getElement(".sidebar--toggle");
  const sidebarWrap    = getElement(".sidebar--wrap");
  const sidebarOverlay = getElement(".sidebar--overlay");
  // sidebar dropdown toggle
  const sidebarDropdownToggle = getElement(".sidebar__dropdown--toggle");
  const sidebarDropdownNav    = getElement(".sidebar__dropdown__nav");

  //* sidebar toggle
  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle("is-active");
    sidebarToggle.classList.toggle("is-active");
    sidebarWrap.classList.toggle("wrap");
    document.body.classList.toggle("overflow--hidden");
  });

  //* hide sidebar when clicking sidebar--overlay
  sidebarOverlay.addEventListener('click', () => {
    sidebar.classList.remove("is-active");
    sidebarToggle.classList.remove("is-active");
    sidebarWrap.classList.remove("wrap");
    document.body.classList.remove("overflow--hidden");
  });

  //* display drop down
  sidebarDropdownToggle.addEventListener('click', () => {
    toggleClasses(sidebarDropdownToggle, "is-active", "fa-angle-left", "fa-angle-down");
    sidebarDropdownNav.classList.toggle("is-active");
  });

}

