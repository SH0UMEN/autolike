import axios from "axios"

let orderExample =  {
    doerType: null,
    socID: null,
    cheatingType: null,
    link: null,
    quantity: null,
    quantityPerHour: null
}

export default {
    state: {
        orderModalShown: false,
        orders: [
        ],

        // Создание нового заказа
        newOrder: Object.assign({}, orderExample)
    },
    getters: {
        orderModalIsShown(state) {
            return state.orderModalShown
        },
        getOrders(state) {
            return state.orders;
        },
        getOrderByID(state) {
            return (id) => {
                return state.orders.find((el, index, array)=>{
                    return el.id == id;
                })
            }
        },

        // Создание заказа
        getNewOrderQuantity(state) {
            return state.newOrder.quantity;
        }
    },
    actions: {
        getOwnOrders(context, settings) {
            let next = settings.next;

            return new Promise((resolve, reject) => {
                axios.post(context.getters.getAPIurl + "/order/get", settings.params).then((res)=>{
                    context.commit("setListOrders", {res: res.data.data.data, next:next});
                    resolve(res.data.data)
                }).catch((err)=>{
                    reject(err)
                })
            })
        },
        createOrder(context, props) {
            return new Promise((resolve, reject) => {
                axios.post(context.getters.getAPIurl + "/order/create", props).then((res)=>{
                    resolve()
                }).catch((err)=>{
                    reject(err)
                })
            })
        }
    },
    mutations: {
        openOrderModal(state) {
            state.orderModalShown = true;
        },
        closeOrderModal(state) {
            state.orderModalShown = false;
            state.newOrder = Object.assign({}, orderExample)
        },
        setListOrders(state, data) {
            if (data.next) {
                state.orders = state.orders.concat(data.res)
            } else {
                state.orders = data.res
            }
        },
        commitOrderFirstSlide(state, data) {
            state.newOrder.cheatingType = data.cheatingType;
            state.newOrder.socID = data.socID;
            state.newOrder.doerType = data.doerType;
        },
        commitOrderSecondSlide(state, data) {
            state.newOrder.link = data.link;
            state.newOrder.quantity = data.quantity;
            state.newOrder.quantityPerHour = data.quantityPerHour;
        }
    }
}