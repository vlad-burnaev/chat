export const ProfileEditDataPageTemplate = `
    <div class="content">
        {{> ProfileAvatar }}
        <div class="name">Иван</div>
        <div class="info">
            {{#data}}
                {{> ProfileDataFieldEditable }}
            {{/data}}
        </div>
        <div class="actions">
            {{> Button submitButton }}
        </div>
        {{> ProfileGoBack goBack }}
    </div>
`