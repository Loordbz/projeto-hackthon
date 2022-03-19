import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import TelaLogin from '../views/TelaLogin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Início',
    component: Inicio
  },
  {
    path: '/login',
    name: 'TelaLogin',
    component: TelaLogin
  }
]

const router = new VueRouter({
  routes
})

export default router
