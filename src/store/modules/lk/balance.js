export default {
    state: {
        balanceModalShown: false,
    },
    getters: {
        balanceModalIsShown(state) {
            return state.balanceModalShown
        }
    },
    actions: {

    },
    mutations: {
        openBalanceModal(state) {
            state.balanceModalShown = true;
        },
        closeBalanceModal(state) {
            state.balanceModalShown = false
        }
    }
}