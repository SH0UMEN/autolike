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

    },
    mutations: {
        openOrderModal(state) {
            state.orderModalShown = true;
        },
        closeOrderModal(state) {
            state.orderModalShown = false
        }
    }
}