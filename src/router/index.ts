import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeComponent from '@/pages/home/home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  }
]

const router = new VueRouter({
  routes
})

export default router
