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
        <section class="chatsBlockChats">
            {{#chats}}
            {{> Chat }}
            {{/chats}}
        </section>
    </article>
    <div class="dialog">
        {{> DialogActive dialog }}
<!--            <div class="dialogUnselected">-->
<!--                Выберите чат чтобы отправить сообщение-->
<!--            </div>-->
    </div>
`