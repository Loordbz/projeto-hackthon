import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import TelaLogin from '../views/TelaLogin.vue'
import MeusProdutos from '../views/MeusProdutos.vue'
import formDoVendedor from '../components/formDoVendedor.vue'
import CadVendedor from '../components/CadVendedor.vue'
import PageSobre from '../views/PageSobre.vue'

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
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: CadVendedor
  },
  {
    path: '/sobre',
    name: 'PageSobre',
    component: PageSobre
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
