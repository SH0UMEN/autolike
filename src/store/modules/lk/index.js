import order from "./order"
import balance from "./balance"
import socials from "./socials"
import tasks from "./tasks"

export default {
    state: {
        ...socials.state,
        ...order.state,
        ...balance.state,
        ...tasks.state,
    },
    getters: {
        ...socials.getters,
        ...order.getters,
        ...balance.getters,
        ...tasks.getters,
    },
    actions: {
        ...socials.actions,
        ...order.actions,
        ...balance.actions,
        ...tasks.actions,
    },
    mutations: {
        ...socials.mutations,
        ...order.mutations,
        ...balance.mutations,
        ...tasks.mutations,
    }
}