const root = document.querySelector('.root');

const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: <span>{{firstname}}</span> {{lastname}}");
root.innerHTML = template({ firstname: "Vlad", lastname: "Burnaev" });