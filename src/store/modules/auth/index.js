export default {
    state: {
        user: {
            name: "shoumen",
            balance: 10000,
        },
        logoutDialogOpened: false
    },
    getters: {
        getUser(state) {
            return state.user;
        },
        isLogoutDialogOpened(state) {
            return state.logoutDialogOpened;
        }
    },
    actions: {
    },
    mutations: {
        openLogoutDialog(state) {
            state.logoutDialogOpened = true;
        },
        closeLogoutDialog(state) {
            state.logoutDialogOpened = false;
        }
    }
}