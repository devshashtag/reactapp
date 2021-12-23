// global imports 
import { getElement, toggleClasses, baseUrl } from "./utils.js";
import { topbarTemplate, navbarTemplate, 
         sidebarTemplate, bodyWrapperTemplate } from "/assets/js/global/display.js";

// navigation urls 
import { route } from "/assets/js/data/route.js";

const topbarEvents = () => { 
  // topbar search toggle
  const searchToggle = getElement(".topbar__search--toggle");
  const navbar = getElement(".navbar");

  // display search-form in navbar
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

  // display sidebar
  navbarToggle.addEventListener('click', () => {
    sidebar.classList.toggle("is-active");
    navbarToggle.classList.toggle("is-active");
    bodyWrapper.classList.toggle("wrap");
    document.body.classList.toggle("overflow--hidden");
  });

  // hide sidebar when clicking .body--overlay
  bodyOverlay.addEventListener('click', () => {
    sidebar.classList.remove("is-active");
    navbarToggle.classList.remove("is-active");
    bodyWrapper.classList.remove("wrap");
    document.body.classList.remove("overflow--hidden");
  });
}

const sidebarEvents = () => {
  // check clicking on sidebar__list 
  let sidebarList = getElement(".sidebar__list");
  // if click on dropdown toggle. show dropdown__list
  sidebarList.addEventListener('click', (el) => {
    if(el.target.classList.contains("sidebar__dropdown--toggle")){
      let toggle = el.target;
      const dropdownList = toggle.parentNode.parentNode.querySelector(".dropdown__list");
      // display dropdown__list
      toggleClasses(toggle, "is-active", "fa-angle-left", "fa-angle-down");
      dropdownList.classList.toggle("is-active");
    }
  });
}

// document name
let doc_name = baseUrl(document.location.pathname)

// header options
let options = {
  topbar:true
}

// check options in route items
function checkOptions(items) {
  for(let item of items) {
    if(item.type === "dropdown") {
      checkOptions(item.data);
    } 
    else if(item.topbar === false && baseUrl(item.url) == doc_name){
      options.topbar = false;
      return;
    }
  }
}

// check if topbar disabled in routes
checkOptions(route);

// create templates before pages loads
const sidebar = sidebarTemplate(route);
const navbar  = navbarTemplate(route);

const topbar  = options.topbar? topbarTemplate():'';

// header
const headerInit = () => {
  // html template
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
  if (options.topbar) {
    topbarEvents();
  }
  navbarEvents();
  sidebarEvents();
}

export { headerInit };

