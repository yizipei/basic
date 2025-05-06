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
      path: '/template-syntax',
      name: 'TemplateSyntax',
      component: () => import('@/views/TemplateSyntax.vue'),
    },
    {
      path: '/reactivity',
      name: 'ReactivityView',
      component: () => import('@/views/ReactivityView.vue'),
    },
    {
      path: '/computed',
      name: 'ComputedView',
      component: () => import('@/views/ComputedView.vue'),
    },
    {
      path: '/class-and-style',
      name: 'ClassAndStyle',
      component: () => import('@/views/ClassAndStyle/ClassAndStyle.vue'),
    },
    {
      path: '/form-view',
      name: 'FormView',
      component: () => import('@/views/FormView.vue'),
    },
    {
      path: '/watch-view',
      name: 'WatchView',
      component: () => import('@/views/WatchView.vue'),
    },
    {
      path: '/components-view',
      name: 'ComponentsView',
      component: () => import('@/views/ComponentsView/ComponentsView.vue'),
    },
    //LifeCycleView
    {
      path: '/life-cycle-view',
      name: 'LifeCycleView',
      component: () => import('@/views/LifeCycleView/LifeCycleView.vue'),
    },
    // composableView
    {
      path: '/composable-view',
      name: 'ComposableView',
      component: () => import('@/views/ComposableView.vue'),
    },
    // transitionView
    {
      path: '/transition-view',
      name: 'TransitionView',
      component: () => import('@/views/TransitionView.vue'),
    },
  ],
})

export default router
