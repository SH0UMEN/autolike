import order from "./order.js"
import balance from "./balance"

export default {
    state: {
        ...order.state,
        ...balance.state,
    },
    getters: {
        ...order.getters,
        ...balance.getters
    },
    actions: {
        ...order.actions,
        ...balance.actions
    },
    mutations: {
        ...order.mutations,
        ...balance.mutations
    }
}