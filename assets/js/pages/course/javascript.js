import { getElement } from "/assets/js/global/utils.js";
import { topbarEvent, navbarEvent, sidebarEvent } from "/assets/js/global/headerEvents.js";

let $ = document;

//* runs when page load
window.addEventListener("DOMContentLoaded", function () {
  // code here
  // Frequently Asked Questions
  const questions = getElement(".frequently-questions");

  questions.addEventListener("click", (el) => {
    let elmParent = el.target.parentNode;

    if (el.target.classList.contains("question"))
      elmParent.classList.toggle("questions-active");

    if (elmParent.classList.contains("question"))
      elmParent.parentElement.classList.toggle("questions-active");
  });

  // Seasons and Projects
  const seasonsTitles = $.querySelectorAll(".seasons-projects");
  const seasonInfo = $.querySelectorAll(".season-info");

  seasonsTitles.forEach((seasonsTitle) => {
    seasonsTitle.addEventListener("click", () => {
      seasonsTitle.parentElement.classList.toggle(
        "seasons-projects-box-active"
      );
      seasonsTitle.lastElementChild.classList.toggle("down-icon-active");
      console.log(seasonsTitle);

      seasonInfo.forEach((season_info) => {
        if (seasonsTitle.dataset.number == season_info.dataset.number) {
          season_info.classList.toggle("season-info-active");
        }
      });
    });
  });

  // click on btn-up-page
  const btnUpPage = getElement(".btn-scroll");
  // scroll window and click on studyMode
  const asideCourse = $.querySelector(".aside-course");
  const mains = $.querySelectorAll("main");
  const studyMode = $.querySelector(".study-mode");

  studyMode.addEventListener("click", () => {
    asideCourse.classList.toggle("aside-study-mode");
    mains.forEach((main) => {
      main.classList.toggle("main-active");
    });
  });

  // aside and study-mode fixed
  window.addEventListener("scroll", () => {
    // scroll-to-top
    if (window.scrollY > 60) {
      btnUpPage.classList.add("btn-scroll-active");
    } else {
      btnUpPage.classList.remove("btn-scroll-active");
    }

    if (window.scrollY >= 600) {
      studyMode.classList.add("study-mode-active");
    } else {
      studyMode.classList.remove("study-mode-active");
    }

    if (window.scrollY >= 1050 && window.scrollY <= 5487) {
      asideCourse.classList.add("aside-active");
    } else {
      asideCourse.classList.remove("aside-active");
    }
  });

  // Header Events
  topbarEvent();
  navbarEvent();
  sidebarEvent();
});
