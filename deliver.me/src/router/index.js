import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=> import('../views/HomeScreen.vue')
  },
  {
    path: '/createAccount',
    name: 'createAccount',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/CreateAccountScreen.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
