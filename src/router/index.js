import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import TelaLogin from '../views/TelaLogin.vue'
import MeusProdutos from '../views/MeusProdutos.vue'
import formDoVendedor from '../components/formDoVendedor.vue'

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
  },
  {
    path: '/produtos',
    name: 'Produtos',
    component: MeusProdutos
  },

  {
    path: '/formulario',
    name: 'Formulario',
    component: formDoVendedor
  }
]

const router = new VueRouter({
  routes
})

export default router
