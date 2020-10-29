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

let showNav = false;

py.addEventListener('click', addOpen);
