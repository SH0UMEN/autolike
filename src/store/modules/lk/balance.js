import axios from "axios"
import authState from "../auth/index"

export default {
    state: {
        balanceModalShown: false,
        gettingHistory: [
            {
                status: 0,
                money: 25,
                score: 50,
                date: "13:27 23.02.2020"
            },
            {
                status: 1,
                money: 25,
                score: 50,
                date: "13:27 23.02.2020"
            },
            {
                status: 2,
                money: 25,
                score: 50,
                date: "13:27 23.02.2020"
            },
            {
                status: 0,
                money: 25,
                score: 50,
                date: "13:27 23.02.2020"
            },
            {
                status: 0,
                money: 25,
                score: 50,
                date: "13:27 23.02.2020"
            },
            {
                status: 1,
                money: 25,
                score: 50,
                date: "13:27 23.02.2020"
            },
            {
                status: 2,
                money: 25,
                score: 50,
                date: "13:27 23.02.2020"
            },
            {
                status: 0,
                money: 25,
                score: 50,
                date: "13:27 23.02.2020"
            },
            {
                status: 0,
                money: 25,
                score: 50,
                date: "13:27 23.02.2020"
            },
        ],
        donationHistory: [
            {
                status: 0,
                money: 25,
                score: 50,
                date: "13:27 23.02.2020"
            },
            {
                status: 1,
                money: 25,
                score: 50,
                date: "13:27 23.02.2020"
            },
            {
                status: 2,
                money: 25,
                score: 50,
                date: "13:27 23.02.2020"
            },
            {
                status: 0,
                money: 25,
                score: 50,
                date: "13:27 23.02.2020"
            },
            {
                status: 0,
                money: 25,
                score: 50,
                date: "13:27 23.02.2020"
            },
            {
                status: 1,
                money: 25,
                score: 50,
                date: "13:27 23.02.2020"
            },
            {
                status: 2,
                money: 25,
                score: 50,
                date: "13:27 23.02.2020"
            },
            {
                status: 0,
                money: 25,
                score: 50,
                date: "13:27 23.02.2020"
            },
            {
                status: 0,
                money: 25,
                score: 50,
                date: "13:27 23.02.2020"
            },
            {
                status: 0,
                money: 25,
                score: 50,
                date: "13:27 23.02.2020"
            },
            {
                status: 0,
                money: 25,
                score: 50,
                date: "13:27 23.02.2020"
            },
            {
                status: 0,
                money: 25,
                score: 50,
                date: "13:27 23.02.2020"
            },
            {
                status: 0,
                money: 25,
                score: 50,
                date: "13:27 23.02.2020"
            },
            {
                status: 0,
                money: 25,
                score: 50,
                date: "13:27 23.02.2020"
            }
        ]
    },
    getters: {
        balanceModalIsShown(state) {
            return state.balanceModalShown;
        },
        getDonationHistory(state) {
            return state.donationHistory;
        },
        getGettingHistory(state) {
            return state.gettingHistory;
        }
    },
    actions: {
        donation(context, amount) {
            let data = {
                amount: amount
            };

            return new Promise((resolve, reject) => {
                axios.post(context.getters.getAPIurl + "/balance/add", data).then(()=>{
                    axios.post(context.getters.getAPIurl + "/balance/get").then((res)=>{
                        context.commit("refreshBalance", res.data.data.balance);
                        context.commit("closeBalanceModal");
                        resolve(res.data.data.balance);
                    }).catch((err)=>{
                        reject(err)
                    })
                }).catch((err)=>{
                    reject(err)
                })
            })
        },
        balanceRequest(context, data) {
            return axios.post(context.getters.getAPIurl + "/balance/request", data);
        },
        getTransactionRequests(context) {
            return axios.post(context.getters.getAPIurl + "/balance/list");
        }
    },
    mutations: {
        refreshBalance(state, money) {
            authState.state.user.balance = money;
        },
        openBalanceModal(state) {
            state.balanceModalShown = true;
        },
        closeBalanceModal(state) {
            state.balanceModalShown = false
        }
    }
}