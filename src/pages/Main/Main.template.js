import {ArrowRight1Icon} from "/static/icons/arrowRight1Icon";

export const MainPageTemplate = `
    <div class="chatsBlock">
        <div class="chatsBlockHeader">
            <a href="/src/pages/ProfilePages/Profile/Profile.html" class="settingsLink">
                Профиль
                <div class="settingsLinkIcon">
                    ${ArrowRight1Icon}
                </div>
            </a>
            <input type="text" class="search" placeholder="Поиск">
        </div>
        <div class="chatsBlockChats">
            {{#chats}}
            {{> Chat }}
            {{/chats}}
        </div>
    </div>
    <div class="dialog">
        {{> DialogActive dialog }}
<!--            <div class="dialogUnselected">-->
<!--                Выберите чат чтобы отправить сообщение-->
<!--            </div>-->
    </div>
`