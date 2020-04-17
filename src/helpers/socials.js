export default [
    {
        title: "Instagram",
        picture: "/images/lk/instagram.svg",
        pictureMini: "/images/lk/instagram-mini.svg",
        gradient: ['#FE3A68', '#9B1EB3'],
        id: 1,
        cheatingTypes: [
            {
                title: "Подписка на аккаунт",
                id: 2,
                parentID: 1,
                inflectionForms: ["Подписка", "Подписки", "Подписок"]
            },
            {
                title: "Лайк поста",
                id: 1,
                parentID: 1,
                inflectionForms: ["Лайк", "Лайка", "Лайков"]
            },
            {
                title: "Сохранение поста",
                id: 5,
                parentID: 1,
                inflectionForms: ["Сохранение", "Сохранения", "Сохранений"]
            },
            {
                title: "Комментарий",
                id: 3,
                parentID: 1,
                inflectionForms: ["Комментарий", "Комментария", "Комментариев"]
            }
        ]
    },
    {
        title: "Vkontakte",
        picture: "/images/lk/vk.svg",
        pictureMini: "/images/lk/vk-mini.svg",
        color: "#4D76A1",
        id: 2,
        cheatingTypes: [
            {
                title: "Подписка на группу",
                id: 2,
                parentID: 2,
                inflectionForms: ["Подписка", "Подписки", "Подписок"]
            },
            {
                title: "Лайк поста",
                id: 1,
                parentID: 2,
                inflectionForms: ["Лайк", "Лайка", "Лайков"]
            },
            {
                title: "Репост поста",
                id: 6,
                parentID: 2,
                inflectionForms: ["Репост", "Репоста", "Репостов"]
            },
            {
                title: "Комментарий под постом",
                id: 3,
                parentID: 2,
                inflectionForms: ["Комментарий", "Комментария", "Комментариев"]
            }
        ]
    },
    {
        title: "Telegram",
        picture: "/images/lk/telegram.svg",
        pictureMini: "/images/lk/telegram-mini.svg",
        color: "#039BE5",
        id: 3,
        cheatingTypes: [
            {
                title: "Вступление в группу",
                id: 2,
                parentID: 3,
                inflectionForms: ["Вступление", "Вступления", "Вступлений"]
            },
            {
                title: "Просмотр постов",
                id: 7,
                parentID: 3,
                inflectionForms: ["Просмотр", "Просмотра", "Просмотров"]
            },
        ]
    },
    {
        title: "Twitter",
        picture: "/images/lk/twitter.svg",
        pictureMini: "/images/lk/twitter-mini.svg",
        color: "#03A9F4",
        id: 4,
        cheatingTypes: [
            {
                title: "Подписка",
                id: 2,
                parentID: 4,
                inflectionForms: ["Подписка", "Подписки", "Подписок"]
            },
            {
                title: "Лайк поста",
                id: 1,
                parentID: 4,
                inflectionForms: ["Лайк", "Лайка", "Лайков"]
            },
            {
                title: "Ретвит поста",
                id: 6,
                parentID: 4,
                inflectionForms: ["Ретвит", "Ретвита", "Ретвитов"]
            },
        ]
    },
    {
        title: "Facebook",
        picture: "/images/lk/facebook.svg",
        pictureMini: "/images/lk/facebook-mini.svg",
        color: "#4267B2",
        id: 5,
        noBot: true,
        cheatingTypes: [
            {
                title: "Вступить в группу",
                inflectionForms: ["Вступление", "Вступления", "Вступлений"],
                id: 2,
                parentID: 5,
            },
        ]
    },
    {
        title: "YouTube",
        picture: "/images/lk/youtube.svg",
        pictureMini: "/images/lk/youtube-mini.svg",
        color: "#FF0000",
        id: 6,
        noBot: true,
        cheatingTypes: [
            {
                title: "Подписка на канал",
                inflectionForms: ["Подписка", "Подписки", "Подписок"],
                id: 2,
                parentID: 6,
            },
            {
                title: "Лайк видео",
                id: 1,
                parentID: 6,
                inflectionForms: ["Лайк", "Лайка", "Лайков"]
            },
        ]
    },
    {
        title: "TikTok",
        picture: "/images/lk/tiktok.svg",
        pictureMini: "/images/lk/tiktok-mini.svg",
        color: "#222222",
        id: 7,
        noBot: true,
        cheatingTypes: [
            {
                title: "Подписка",
                id: 2,
                parentID: 7,
                inflectionForms: ["Подписка", "Подписки", "Подписок"],
            },
            {
                title: "Лайк",
                id: 1,
                parentID: 7,
                inflectionForms: ["Лайк", "Лайка", "Лайков"]
            },
        ]
    },
]