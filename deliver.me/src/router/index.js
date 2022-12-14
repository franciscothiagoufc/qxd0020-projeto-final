import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store'


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
    name: 'AdminPage',
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
  },
  {
    path: '/myOrders',
    name: 'myOrders',
    component: ()=> import('@/views/MyOrdersScreen.vue')
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

/*Páginas protegidas*/
router.beforeEach(async (to, from) =>{
  if (to.name == 'AdminPage' && store.state.user.role != "Admin") return false
  else if (to.name == 'DeliverScreen' && store.state.user.role != "Deliver") return false
  else if (to.name == 'AfiliateScreen' && store.state.user.role != "Authenticated") return false
})
export default router
