export default {
    state: {
        orders: [
            {
                photoURL: "/images/photo1.png",
                title: "Страница olga1972",
                status: 0,
                type: "likes",
                quantity: 1000,
                price: 10000,
                date: "12:33, 22.02.2020"
            },
            {
                photoURL: "/images/photo2.png",
                title: "Страница olga1972",
                status: 4,
                type: "subscribes",
                quantity: 100000,
                price: 10000,
                date: "12:33, 22.02.2020"
            },
            {
                photoURL: "/images/photo2.png",
                title: "Страница olga1972",
                status: 3,
                type: "subscribes",
                quantity: 1000,
                price: 1000,
                date: "12:33, 22.02.2020"
            }
        ]
    },
    getters: {
        getOrders(state) {
            return state.orders;
        }
    },
    actions: {

    },
    mutations: {

    }
}