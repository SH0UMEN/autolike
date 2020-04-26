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
        successModalText: "",
        successModalShown: false,
    },
    getters: {
        ...socials.getters,
        ...order.getters,
        ...balance.getters,
        ...tasks.getters,

        getSuccessModalText(state) {
            return state.successModalText;
        }
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

        openSuccessModal(state, text) {
            state.successModalText = text;
            state.successModalShown = true;
        },
        closeSuccessModal(state) {
            state.successModalShown = false;
        },
    }
}