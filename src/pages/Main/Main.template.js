import {ArrowRight1Icon} from "/static/icons/arrowRight1Icon";

export const MainPageTemplate = `
    <article class="chatsBlock">
        <section class="chatsBlockHeader">
            <a href="/src/pages/ProfilePages/Profile/Profile.html" class="settingsLink">
                Профиль
                <div class="settingsLinkIcon">
                    ${ArrowRight1Icon}
                </div>
            </a>
            <input type="text" class="search" placeholder="Поиск">
        </section>
        <ul class="chatsBlockChats">
            {{#chats}}
                {{> Chat }}
            {{/chats}}
        </ul>
    </article>
    <div class="dialog">
        {{> DialogActive dialog }}
<!--            <div class="dialogUnselected">-->
<!--                Выберите чат чтобы отправить сообщение-->
<!--            </div>-->
    </div>
`