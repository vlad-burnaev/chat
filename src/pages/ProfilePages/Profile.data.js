export const ProfilePageData = {
    avatar: {
        src: "../../../static/icons/image.svg",
        alt: "image",
        overlayText: "Поменять аватар"
    },
    data: [
        { category: "Почта", data: "pochta@yandex.ru" },
        { category: "Логин", data: "ivanivanov" },
        { category: "Имя", data: "Иван" },
        { category: "Фамилия", data: "Иванов" },
        { category: "Имя в чате", data: "Иван" },
        { category: "Телефон", data: "+7 (909) 967 30 30" }
    ],
    actions: [
        { href: "ProfileEditData/ProfileEditData.html", label: "Изменить данные" },
        { href: "ProfileEditData/ProfileChangePassword.html", label: "Изменить пароль" },
        { href: "../SignIn/SignIn.html", label: "Выйти" },
    ]
}