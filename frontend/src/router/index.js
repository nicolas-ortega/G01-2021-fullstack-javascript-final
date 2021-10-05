import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Products from '../views/Products.vue'
import Create from '../views/CreateProduct'
import { firebaseApp } from '@/firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/productos',
    name: 'Products',
    component: Products,
    meta: {
      login: true
    }
  },
  {
    path: '/crear',
    name: 'Crear',
    component: Create,
    meta: {
      login: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  firebaseApp.auth().onAuthStateChanged(user => {
    const authRequired = to.matched.some(route => route.meta.login)
    if (!user && authRequired) {
      next('/')
    } else {
      next()
    }
  })
})

export default router
