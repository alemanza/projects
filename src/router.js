import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Hslider from './views/Hslider.vue'
import Vslider from './views/Vslider.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/hslider',
      name: 'hslider',
      component: Hslider
    },
    {
      path: '/vslider',
      name: 'vslider',
      component: Vslider
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
