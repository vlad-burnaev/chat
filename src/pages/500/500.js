import {Error500Template} from "./500.template";
import {ErrorData} from "./500.data";
import {ErrorTemplate} from "../../components/Error/Error.template";

const Handlebars = require("handlebars");

const container = document.querySelector('.error');

const Error = Handlebars.compile(ErrorTemplate);
const Error500Page = Handlebars.compile(Error500Template);
Handlebars.registerPartial({ Error })

container.innerHTML = Error500Page(ErrorData)