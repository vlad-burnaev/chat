export const ProfileChangePasswordPageData = {
    data: [
        { id: 'oldPassword', category: "Старый пароль", type: 'password', placeholder: "•••••••••" },
        { id: 'newPassword', category: "Новый пароль", type: 'password', placeholder: "•••••••••••" },
        { id: 'newPassword2', category: "Повторите новый пароль", type: 'password', placeholder: "•••••••••••" },
    ],
    submitButton: { href: "../Profile/Profile.html", label: "Сохранить" },
    goBack: {
        href: "../Profile.html"
    }
}