import {sum} from './modules/sum';

const root = document.querySelector('#root');
root.textContent = sum(6, -1).toString();

const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Nils" }));