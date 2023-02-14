import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'
import DynamicCmps from '../views/DynamicCmps.vue'
import Directives from '../views/Directives.vue'
import Watchers from '../views/Watchers.vue'
import VModel from '../views/VModel.vue'
import Modal from '../views/Modal.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/dynamic',
      component: DynamicCmps
    },
    {
      path: '/directives',
      component: Directives
    },
    {
      path: '/watchers',
      component: Watchers
    },
    {
      path: '/vmodel',
      component: VModel
    },
    {
      path: '/modal',
      component: Modal
    },
    // {
    //   path: '/about',
    //   component: AboutView,
    // }
  ]
})

export default router
