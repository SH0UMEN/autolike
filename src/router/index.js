import Vue from 'vue'
import VueRouter from 'vue-router'
import LK from './lk/index'
import Auth from './auth/index'

Vue.use(VueRouter)

const routes = [
    ...LK,
    ...Auth
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
