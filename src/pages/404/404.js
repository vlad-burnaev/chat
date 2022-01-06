import {Error404Template} from "./404.template";
import {ErrorData} from "./404.data";
import {ErrorTemplate} from "../../components/Error/Error.template";

const Handlebars = require("handlebars");

const container = document.querySelector('.error');

const Error = Handlebars.compile(ErrorTemplate);
const Error404Page = Handlebars.compile(Error404Template);
Handlebars.registerPartial({ Error })

container.innerHTML = Error404Page(ErrorData)