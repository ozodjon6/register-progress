import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/Dashboard')
  },
  {
    path: '/company-information',
    name: 'CompanyInformation',
    component: () => import('../views/CompanyInformation')
  },
  {
    path: '/transaction-information',
    name: 'TransactionInformation',
    component: () => import('../views/TransactionInformation')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
