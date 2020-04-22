import axios from "axios"

export default {
    state: {
        bindingModalShown: false,
        socID: 0,
        socials: [],
        // Добавление новой соц.сети
        socData: "",
    },
    getters: {
        getCurrentSocID(state) {
            return state.socID;
        },
        getSocData(state) {
            return state.socData;
        },
        getSocials(state) {
            return state.socials;
        },
    },
    actions: {
        bindSocial(context, data) {
            return axios.post(context.getters.getAPIurl + "/user/social/add", data);
        },
        getBindedSocials(context) {
            return axios.post(context.getters.getAPIurl + "/user/social/get").then((res)=>{
                context.commit("setSocialList" , Object.values(res.data.data.socials))
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
        },
        setSocialList(state, data) {
            state.socials = data;
        }
    }
}