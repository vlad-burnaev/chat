export const signUpTemplate = `
    <div class="modal">
        <h1 class="title">{{title}}</h1>
        <form class="form">
            {{#formfields}}
                {{> FormField }}
            {{/formfields}}
            <div class="submitButtonWrapper">
                {{> Button submitButton }}
            </div>
            <a href="../SignIn/SignIn.html" class="secondaryButton">Войти</a>
        </form>
    </div>
`