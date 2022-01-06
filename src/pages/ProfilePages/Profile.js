import {ProfileAvatarTemplate} from "./components/ProfileAvatar/ProfileAvatar.template";
import {ProfileDataFieldTemplate} from "./components/ProfileDataField/ProfileDataField.template";
import {ProfileActionButtonTemplate} from "./components/ProfileActionButton/ProfileActionButton.template";
import {ProfilePageTemplate} from "./Profile.template";
import {ProfilePageData} from "./Profile.data";

const Handlebars = require("handlebars");

const container = document.querySelector('.ProfilePage');

const ProfileAvatar = Handlebars.compile(ProfileAvatarTemplate);
const ProfileDataField = Handlebars.compile(ProfileDataFieldTemplate);
const ProfileActionButton = Handlebars.compile(ProfileActionButtonTemplate);
Handlebars.registerPartial({ ProfileAvatar, ProfileDataField, ProfileActionButton });

const ProfilePage = Handlebars.compile(ProfilePageTemplate);

container.innerHTML = ProfilePage(ProfilePageData);