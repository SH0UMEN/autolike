import order from "./order.js"

export default {
    state: {
        ...order.state,
        orders: [
            {
                photoURL: "/images/photo1.png",
                title: "Страница olga1972",
                status: 0,
                type: "likes",
                quantity: 1000,
                price: 10000,
                date: "12:33, 22.02.2020",
                id: 0
            },
            {
                photoURL: "/images/photo2.png",
                title: "Страница olga1972",
                status: 4,
                type: "subscribes",
                quantity: 100000,
                price: 103200,
                date: "12:33, 22.02.2020",
                id: 1
            },
            {
                photoURL: "/images/photo2.png",
                title: "Страница olga1972",
                status: 3,
                type: "subscribes",
                quantity: 1000,
                price: 100,
                date: "12:33, 22.02.2020",
                id: 2
            },
            {
                photoURL: "/images/photo2.png",
                title: "Страница olga1972",
                status: 1,
                type: "subscribes",
                quantity: 100000,
                price: 100,
                date: "12:33, 22.02.2020",
                id: 3
            },
            {
                photoURL: "/images/photo2.png",
                title: "Страница olga1972",
                status: 0,
                type: "subscribes",
                quantity: 10200,
                price: 1000,
                date: "12:33, 22.02.2020",
                id: 4
            }
        ]
    },
    getters: {
        ...order.getters,
        getOrders(state) {
            return state.orders;
        },
        getOrderByID(state) {
            return (id) => {
                return state.orders.find((el, index, array)=>{
                    return el.id == id;
                })
            }
        }
    },
    actions: {
        ...order.actions
    },
    mutations: {
        ...order.mutations
    }
}