import axios from 'axios'

export default {
    state: {
        token: localStorage.getItem("token") || "",
        status: '',
        user: null,
        logoutDialogOpened: false
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
        }
    },
    actions: {
        logout(context) {
            return new Promise((resolve, reject) => {
                axios.post(context.getters.getAPIurl + "/logout").then((res)=>{
                    delete axios.defaults.headers.common['Authorization'];
                    localStorage.removeItem("token")
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
                    headers: {
                        'Authorization': 'Bearer ' + context.state.token
                    }
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
                    url: context.getters.getAPIurl + "/refresh",
                    headers: {
                        'Authorization': 'Bearer ' + context.state.token
                    }
                }).then((res)=>{
                    console.log(res.data);
                    context.commit('authSuccess', res.data.token);
                    resolve()
                }).catch((err)=>{
                    console.log(err.response.data);
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
                        localStorage.setItem("token", token);
                        axios.defaults.headers.common['Authorization'] = "Bearer " + token;
                        context.commit('authSuccess', token);
                        context.dispatch("getUserData").then((res) => {
                            resolve(res)
                        })
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
                    url: context.getters.getAPIurl + "/password/change",
                    params: params
                }).then((res) => {
                    resolve(res.data)
                }).catch((err)=>{
                    reject(err)
                })
            })
        },
        requestChangePassword(context, email) {
            return new Promise((resolve, reject) => {
                axios({
                    method: "post",
                    url: context.getters.getAPIurl + "/password/recover?email=" + email,
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
            state.token = "";
        },
        setUser(state, user) {
            state.user = user;
        },
        authSuccess(state, token) {
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
        }
    }
}