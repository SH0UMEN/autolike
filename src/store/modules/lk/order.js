import axios from "axios"

export default {
    state: {
        orderModalShown: false,
        orders: [
        ]
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
        }
    },
    actions: {
        getOwnOrders(context, settings) {
            let next = settings.next
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
        },
        setListOrders(state, data) {
            if (data.next) {
                state.orders = state.orders.concat(data.res)
            } else {
                state.orders = data.res
            }
        },
    }
}