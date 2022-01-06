export const ProfilePageTemplate = `
    <div class="content">
        {{> ProfileAvatar }}
        <div class="name">Иван</div>
        <div class="info">
            {{#data}}
                {{> ProfileDataField }}
            {{/data}}
        </div>
        <div class="actions">
            {{#actions}}
                {{> ProfileActionButton }}
            {{/actions}}
        </div>
        {{> ProfileGoBack goBack }}
    </div>
`