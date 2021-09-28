import Vue from 'vue'

import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import base from '../views/base/base.vue'
import chat from '../views/campfire/chats.vue'
import dashboard from '../views/dashboard/dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/base',
    name: 'base',
    component: base
  },
  {
    path: '/chat',
    name: 'chat',
    component: chat
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
