import {CheckMarkIcon} from "/static/icons/checkMarkIcon";

const Handlebars = require("handlebars");

Handlebars.registerHelper('isSent', function (value) {
    return value === 'sent';
});

export const MessageTemplate = `
    <div class="message">
        <span class="messageText">{{text}}</span>
        <div class="messageMeta">
            {{#if (isSent meta.status)}}
<!--                <div class="messageMetaIcon">-->
                    ${CheckMarkIcon}
<!--                </div>-->
            {{/if}}
            <span class="messageMetaText">{{meta.time}}</span>
        </div>
    </div>
`