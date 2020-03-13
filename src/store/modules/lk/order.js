import axios from "axios"

export default {
    state: {
        orderModalShown: false,
    },
    getters: {
        orderModalIsShown(state) {
            return state.orderModalShown
        }
    },
    actions: {
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
            state.orderModalShown = false
        },
    }
}