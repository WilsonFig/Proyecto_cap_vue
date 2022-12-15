import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NavBar from '../components/NavBar.vue'
import LandingProyecto from '../views/LandingProyecto.vue'
import InicioDeSesion from '../components/InicioDeSesion.vue'
import ModalSolicitarCharla from '../components/ModalSolicitarCharla.vue'
import ModalEjemplo from '../components/ModalEjemplo.vue'
import CronoGrama from '../components/CronoGrama.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/InicioDeSesion',
    name:'InicioDeSesion',
    component: InicioDeSesion
  },
  {
    path: '/CronoGrama',
    name:'CronoGrama',
    component: CronoGrama
  },
  {
    path: '/ModalSolicitarCharla',
    name:'ModalSolicitarCharla',
    component: ModalSolicitarCharla
  },
  {
    path: '/ModalEjemplo',
    name:'ModalEjemplo',
    component: ModalEjemplo
  },
  {
    path:'/Nav',
    name:'NavBar',
    component: NavBar
  },
  {
    path:'/LandingProyecto',
    name: 'LandingProyecto',
    component: LandingProyecto
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
