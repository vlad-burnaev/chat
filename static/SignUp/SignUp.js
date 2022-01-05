import {FormFieldTemplate} from "../../src/components/FormField/FormField.template";
import {ButtonTemplate} from "../../src/components/Button/Button.template";
import {SignUpData} from "./SignUp.data";
import {signUpTemplate} from "./SignUp.template";

const Handlebars = require("handlebars");

const container = document.querySelector('.signUp');

const FormField = Handlebars.compile(FormFieldTemplate);
const Button = Handlebars.compile(ButtonTemplate);
Handlebars.registerPartial({ FormField, Button });

const SignUpPage = Handlebars.compile(signUpTemplate);
container.innerHTML = SignUpPage(SignUpData);