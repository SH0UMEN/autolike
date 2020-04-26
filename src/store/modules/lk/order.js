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
        prices: {
            all: 0.87
        },
        orderModalShown: false,
        lastParams: {},
        pageCount: 0,
        orders: [
        ],

        // Создание нового заказа
        newOrder: Object.assign({}, orderExample),

        // Тех. поддержка
        supportModalShown: false
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

        // Создание нового заказа
        getNewOrderQuantity(state) {
            return state.newOrder.quantity;
        }
    },
    actions: {
        getOwnOrders(context, settings) {
            context.state.lastParams = settings;
            context.state.lastParams.next = false;
            let next = settings.next;

            return new Promise((resolve, reject) => {
                axios.post(context.getters.getAPIurl + "/order/get", settings.params).then((res)=>{
                    context.commit("setListOrders", {res: res.data.data.data, next:next, pageCount: res.data.data.last_page});
                    resolve(res.data.data)
                }).catch((err)=>{
                    reject(err)
                })
            })
        },

        retryGetOwnOrders(context) {
            return context.dispatch("getOwnOrders", context.state.lastParams);
        },

        createOrder(context) {
            let order = context.state.newOrder,
                data = {
                    social_type: order.socID+"",
                    order_type: 2+"",
                    count: order.quantity,
                    is_bot: order.doerType,
                    url: order.link,
                    price: order.quantity*context.state.prices.all
                };

            if(order.doerType == 1) {
                data['speed'] = order.quantityPerHour;
            }

            return new Promise((resolve, reject) => {
                axios.post(context.getters.getAPIurl + "/order/create", data).then((res)=>{
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
            state.pageCount = data.pageCount;

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
        },
        clearOrderSecondSlide(state) {
            state.newOrder.link = orderExample.link;
            state.newOrder.quantity = orderExample.quantity;
            state.newOrder.quantityPerHour = orderExample.quantityPerHour;
        },
        setNewOrderLink(state, link) {
            state.newOrder.link = link;
        },
        openSupportModal(state) {
            state.supportModalShown = true;
        },
        closeSupportModal(state) {
            state.supportModalShown = false;
        }
    }
}