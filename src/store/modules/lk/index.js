import order from "./order"
import balance from "./balance"
import socials from "./socials"

export default {
    state: {
        ...socials.state,
        ...order.state,
        ...balance.state,
    },
    getters: {
        ...socials.getters,
        ...order.getters,
        ...balance.getters
    },
    actions: {
        ...socials.actions,
        ...order.actions,
        ...balance.actions
    },
    mutations: {
        ...socials.mutations,
        ...order.mutations,
        ...balance.mutations
    }
}