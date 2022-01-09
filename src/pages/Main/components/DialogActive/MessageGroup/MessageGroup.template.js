const Handlebars = require("handlebars");

Handlebars.registerHelper('isMyMessages', function (value) {
    return value === 'my';
});

Handlebars.registerHelper('isCompanionMessages', function (value) {
    return value === 'companion';
});

export const MessageGroupTemplate = `
    {{#if (isMyMessages type) }}
        <div class="messageGroup myMessages">
        <div class="messageGroupDate">{{date}}</div>
        {{#messages}}
            {{> Message }}
        {{/messages}}
    </div>
    {{/if}}
    {{#if (isCompanionMessages type) }}
        <div class="messageGroup companionMessages">
            <div class="messageGroupDate">{{date}}</div>
            {{#messages}}
                {{> Message }}
            {{/messages}}
        </div>
    {{/if}}
`