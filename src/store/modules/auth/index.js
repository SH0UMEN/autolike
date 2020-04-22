import axios from 'axios'

export default {
    state: {
        token: localStorage.getItem("token") || "",
        status: '',
        user: null,
        logoutDialogOpened: false,
        pwChangeInfoModalShown: false,
    },
    getters: {
        isAuthenticated(state) {
            return !!state.token;
        },
        authStatus(state) {
            return state.status;
        },
        getUser(state) {
            return state.user;
        },
        isLogoutDialogOpened(state) {
            return state.logoutDialogOpened;
        },
        pwChangeInfoModalShown(state) {
            return state.pwChangeInfoModalShown
        }
    },
    actions: {
        logout(context) {
            return new Promise((resolve, reject) => {
                axios.post(context.getters.getAPIurl + "/logout").then((res)=>{
                    delete axios.defaults.headers.common['Authorization'];
                    context.commit('logout');
                    resolve()
                })
            })
        },
        getUserData(context) {
            return new Promise((resolve, reject) => {
                axios({
                    method: "post",
                    url: context.getters.getAPIurl + "/me",
                }).then((res) => {
                    context.commit('setUser', res.data);
                    resolve(res.data)
                }).catch((err)=>{
                    reject(err)
                })
            })
        },
        refresh(context) {
            return new Promise((resolve, reject) => {
                axios({
                    method: "post",
                    url: context.getters.getAPIurl + "/refresh"
                }).then((res)=>{
                    context.commit('authSuccess', res.data.access_token);
                    resolve(res)
                }).catch((err)=>{
                    //console.log(err.response.data);
                    if(err.response.data.errors.token == "Invalid update") {
                        context.commit("logout");
                    }

                    reject(err)
                })
            })
        },
        auth(context, args) {
            context.commit("authProcess");
            return new Promise((resolve, reject) => {
                axios.post(context.getters.getAPIurl + args.url, args.params)
                    .then((res)=>{
                        let token = args.url == "/register" ? res.data.token : res.data.access_token;
                        context.commit('authSuccess', token);

                        if(args.url != "/register") {
                            context.dispatch("getUserData").then((res) => {
                                resolve(res)
                            })
                        } else {
                            resolve(res)
                        }
                    }).catch((err)=>{
                        context.commit('authError');
                        reject(err);
                    })
            })
        },
        changePassword(context, params) {
            return new Promise((resolve, reject) => {
                axios({
                    method: "post",
                    url: context.getters.getAPIurl + "/password/set",
                    params: params
                }).then((res) => {
                    resolve(res.data)
                }).catch((err)=>{
                    reject(err)
                })
            })
        },
        requestChangePassword(context, email=false) {
            return new Promise((resolve, reject) => {
                axios({
                    method: "post",
                    url: context.getters.getAPIurl + "/password/"+ (email ? 'recover' : 'change'),
                    data: email ? { email: email } : {}
                }).then((res) => {
                    resolve(res.data)
                }).catch((err)=>{
                    reject(err)
                })
            })
        },
        
    },
    mutations: {
        logout(state) {
            localStorage.removeItem("token");
            state.token = "";
        },
        setUserSocials(state, socials) {
            state.socials = socials;
        },
        setUser(state, user) {
            state.user = user;
        },
        authSuccess(state, token) {
            localStorage.setItem("token", token);
            axios.defaults.headers.common['Authorization'] = "Bearer " + token;
            state.status = 'authenticated';
            state.token = token;
        },
        authProcess(state) {
            state.status = 'process';
        },
        authError(state) {
            state.status = 'error';
        },
        openLogoutDialog(state) {
            state.logoutDialogOpened = true;
        },
        closeLogoutDialog(state) {
            state.logoutDialogOpened = false;
        },
        openPwChangeInfoModal(state) {
            state.pwChangeInfoModalShown = true;
        },
        closePwChangeInfoModal(state) {
            state.pwChangeInfoModalShown = false;
        }
    }
}