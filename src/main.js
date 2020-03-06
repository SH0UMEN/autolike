import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import VModal from 'vue-js-modal'
import VuePageTransition from 'vue-page-transition'

Vue.config.productionTip = false

Vue.use(VModal)
Vue.use(Vuelidate)
Vue.use(VuePageTransition)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
