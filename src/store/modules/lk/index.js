import order from "./order"
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