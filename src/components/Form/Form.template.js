export const FormTemplate = `
    <form class="form">
        <div>
            <h1 class="title">{{title}}</h1>
            {{#formfields}}
                {{> FormField}}
            {{/formfields}}
        </div>
        <div class="actionButtons">
            {{> Button submitButton }}
            <a href={{secondaryButton.href}} class="secondaryButton">{{secondaryButton.label}}</a>
        </div>
    </form>
`