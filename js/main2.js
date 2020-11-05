const py = document.querySelector(".python");
const js = document.querySelector(".js");
const sql = document.querySelector(".sql");
const html = document.querySelector(".html");
const css = document.querySelector(".css");
const pylist = document.querySelector(".py-list");
const jslist = document.querySelector(".js-list");
const sqllist = document.querySelector(".sql-list");
const htmllist = document.querySelector(".html-list");
const csslist = document.querySelector(".css-list");

let showCoursePy = true;
let showCourseJs = false;
let showCourseSql = false;
let showCourseHtml = false;
let showCourseCss = false;

py.addEventListener('click', addPressPy);
js.addEventListener('click', addPressJs);
sql.addEventListener('click', addPressSql);
html.addEventListener('click', addPressHtml);
css.addEventListener('click', addPressCss);

function addPressPy() {
    if(!showCoursePy) {
        pylist.classList.add('press');

        showCoursePy = true;
    } else {
        pylist.classList.remove('press');

        showCoursePy = false;
    }
}

function addPressJs() {
    if(!showCourseJs) {
        jslist.classList.add('press');

        showCourseJs = true;
    } else {
        jslist.classList.remove('press');

        showCourseJs = false;
    }
}

function addPressSql() {
    if(!showCourseSql) {
        sqllist.classList.add('press');

        showCourseSql = true;
    } else {
        sqllist.classList.remove('press');

        showCourseSql = false;
    }
}

function addPressHtml() {
    if(!showCourseHtml) {
        htmllist.classList.add('press');

        showCourseHtml = true;
    } else {
        htmllist.classList.remove('press');

        showCourseHtml = false;
    }
}

function addPressCss() {
    if(!showCourseCss) {
        csslist.classList.add('press');

        showCourseCss = true;
    } else {
        csslist.classList.remove('press');

        showCourseCss = false;
    }
}