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
        successModalTitle: "",
        successModalText: "",
        successModalShown: false,
    },
    getters: {
        ...socials.getters,
        ...order.getters,
        ...balance.getters,
        ...tasks.getters,

        getSuccessModalTitle(state) {
            return state.successModalTitle;
        },
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

        openSuccessModal(state, data) {
            state.successModalTitle = data.title;
            state.successModalText = data.text || "";
            state.successModalShown = true;
        },
        closeSuccessModal(state) {
            state.successModalShown = false;
        },
    }
}