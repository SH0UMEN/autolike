export default {
    state: {
        bindingModalShown: false,
        socID: 0
    },
    getters: {
        getCurrentSocID(state) {
            return state.socID
        }
    },
    actions: {

    },
    mutations: {
        openBindingSocialModal(state, socID) {
            state.socID = socID;
            state.bindingModalShown = true;
        },
        closeBindingSocialModal(state) {
            state.bindingModalShown = false;
        }
    }
}