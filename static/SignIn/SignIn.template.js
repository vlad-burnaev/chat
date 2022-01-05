export const signInTemplate = `
    <div class="signIn">
        <div class="modal">
            <h1 class="title">{{title}}</h1>
            <form class="form" action="#" method="post">
                {{#formfields}}
                    {{> FormField}}
                {{/formfields}}
                <div class="submitButtonWrapper">
                    {{> Button submitButton }}
                </div>
                <a href={{signUpButton.href}} class="formLink">{{signUpButton.label}}</a>
            </form>
        </div>
    </div>
`