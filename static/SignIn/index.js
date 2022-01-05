import {ButtonTemplate} from "../../src/components/Button/Button.template";

const Handlebars = require("handlebars");
import { signInTemplate } from './SignIn.template'
import { FormFieldTemplate } from "../../src/components/FormField/FormField.template";
import { SignInData } from './SignIn.data'

const container = document.querySelector(`.root`);

const FormField = Handlebars.compile(FormFieldTemplate);
const Button = Handlebars.compile(ButtonTemplate);
Handlebars.registerPartial({ FormField, Button });

const SignInPage = Handlebars.compile(signInTemplate);
container.innerHTML = SignInPage(SignInData);