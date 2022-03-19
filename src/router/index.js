import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import MeusProdutos from '../views/MeusProdutos.vue'
import formDoVendedor from '../components/formDoVendedor.vue'
import CadVendedor from '../components/CadVendedor.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Início',
    component: Inicio
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
]

const router = new VueRouter({
  routes
})

export default router
