import Vue from 'vue'
import Vuex from 'vuex'
import LK from "./modules/lk"
import Auth from "./modules/auth"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rootAPI: "http://62.113.114.128/api"
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    getAPIurl(state) {
      return state.rootAPI
    }
  },
  modules: {
    LK,
    Auth
  }
})
