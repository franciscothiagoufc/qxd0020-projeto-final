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
  },
  {
    path: '/search/:query',
    name: 'searchPage',
    component: () => import('@/views/SearchScreen.vue'),
    props: route => ({ query: route.query.q })
  },
  {
    path: '/admin/',
    name: 'dminPage',
    component: () => import('@/views/AdminPage.vue')
  },
  {
    path: '/deliver/',
    name: 'DeliverScreen',
    component: () => import('@/views/DeliverScreen.vue')
  },
  {
    path: '/afiliate/',
    name: 'AfiliateScreen',
    component: () => import('@/views/CreateDeliver.vue')
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
