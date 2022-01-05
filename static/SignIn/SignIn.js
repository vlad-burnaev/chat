import {signInTemplate} from './SignIn.template';
import {SignInData} from './SignIn.data';
import {FormTemplate} from "../../src/components/Form/Form.template";
import {FormFieldTemplate} from "../../src/components/FormField/FormField.template";
import {ButtonTemplate} from "../../src/components/Button/Button.template";

const Handlebars = require("handlebars");

const container = document.querySelector('.signIn');

const FormField = Handlebars.compile(FormFieldTemplate);
const Button = Handlebars.compile(ButtonTemplate);
const Form = Handlebars.compile(FormTemplate);
Handlebars.registerPartial({ Form, FormField, Button });

const SignInPage = Handlebars.compile(signInTemplate);
container.innerHTML = SignInPage(SignInData);