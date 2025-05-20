import { createRouter, createWebHistory, type Router } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
    {
      path: '/button-view',
      name: 'buttonView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/button/ButtonView.vue'),
    },
    {
      path: '/demo-view',
      name: 'demoView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DemoView.vue'),
    },
    {
      path: '/show',
      name: 'showView',
      component: () => import('../views/ShowView.vue'),
    },
    {
      path: '/tooltip',
      name: 'tooltip',
      component: () => import('../views/TooltipView.vue'),
    },
  ],
})

export default router
