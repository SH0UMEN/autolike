import axios from "axios"

export default {
    state: {
        bindingModalShown: false,
        socID: 0,
        // Добавление новой соц.сети
        socData: "",
    },
    getters: {
        getCurrentSocID(state) {
            return state.socID
        },
        getSocData(state) {
            return state.socData
        }
    },
    actions: {
        bindSocial(context, data) {
            axios.post("/user/social/add", data).then((res)=>{
                console.log(res);
            });
        }
    },
    mutations: {
        openBindingSocialModal(state, socID) {
            state.socID = socID;
            state.bindingModalShown = true;
        },
        closeBindingSocialModal(state) {
            state.bindingModalShown = false;
        },
        setSocData(state, data) {
            state.socData = data;
        }
    }
}