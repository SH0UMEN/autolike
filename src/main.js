import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import VModal from 'vue-js-modal'
import VuePageTransition from 'vue-page-transition'
import axios from "axios"
import Paginate from 'vuejs-paginate'
import vueSmoothScroll from 'vue2-smooth-scroll'

Vue.config.productionTip = false

Vue.use(vueSmoothScroll)
Vue.use(VModal)
Vue.use(Vuelidate)
Vue.use(VuePageTransition)
Vue.use(require('vue-moment'))

Vue.component('paginate', Paginate)

const token = localStorage.getItem('token');

if (token) {
  axios.defaults.headers.common['Authorization'] = "Bearer " + token;
}

axios.interceptors.response.use(null,(err)=>{
  if(err.response) {
    if(err.response.data.errors) {
      if(err.response.data.errors.token == "Token is Expired") {
        return store.dispatch('refresh').then(()=>{
          return axios({
            method: err.response.config.method,
            url: err.response.config.url,
          }).then((res)=>{
            return Promise.resolve(res);
          })
        });
      } else if (err.response.data.errors.token == "Token is Invalid"){
        store.commit('logout');
        router.push({ name: 'login' });
      }
    }
  }
  return Promise.reject(err)
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
