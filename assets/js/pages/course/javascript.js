let $ = document;

// Frequently Asked Questions
const questions = $.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        question.parentElement.classList.toggle('questions-active');
    })
})

// Seasons and Projects

const seasonsTitles = $.querySelectorAll('.seasons-projects');
const seasonInfo = $.querySelectorAll('.season-info');

seasonsTitles.forEach(seasonsTitle => {
    seasonsTitle.addEventListener('click', (event) => {
        seasonsTitle.parentElement.classList.toggle('seasons-projects-box-active');
        seasonsTitle.lastElementChild.classList.toggle('down-icon-active');

        seasonInfo.forEach(season_info => {
            if (seasonsTitle.dataset.number == season_info.dataset.number) {
                season_info.classList.toggle('season-info-active');
            }
        });
    });
});

// scroll window and click on forStudy
const aside = $.querySelector('aside');
const main = $.querySelector('main');
const forStudy = $.querySelector('.for-study');

forStudy.addEventListener('click', () => {
    main.classList.toggle('main-active');
    if (aside.classList.contains('aside-for-study')) {
        setTimeout((aside.classList.remove('aside-for-study')), 300);
    } else {
        aside.classList.toggle('aside-for-study');
    }
})

// aside and for-study fixed
window.addEventListener('scroll', () => {
    if (window.scrollY >= 600) {
        forStudy.classList.add('for-study-active');
    } else {
        forStudy.classList.remove('for-study-active');
    }

    if (window.scrollY >= 1000) {
        aside.classList.add('aside-active');
    } else {
        aside.classList.remove('aside-active');
    }
})
