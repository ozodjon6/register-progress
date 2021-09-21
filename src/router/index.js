import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    meta: { layout: 'main' },
    component: () => import('../views/Dashboard')
  },
  {
    path: '/register',
    name: 'Register',
    meta: { layout: 'empty' },
    component: () => import('../views/Register')
  },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'empty' },
    component: () => import('../views/Login')
  },
  {
    path: '/company-information',
    name: 'CompanyInformation',
    meta: { layout: 'main' },
    component: () => import('../views/CompanyInformation')
  },
  {
    path: '/transaction-information',
    name: 'TransactionInformation',
    meta: { layout: 'main' },
    component: () => import('../views/TransactionInformation')
  },
  {
    path: '/company-structure',
    name: 'CompanyStructure',
    meta: { layout: 'main' },
    component: () => import('../views/company-structure/CompanyStructure')
  },
  {
    path: '/company-structure-choose',
    name: 'companyStructureChoose',
    meta: { layout: 'main' },
    component: () => import('../views/company-structure/CompanyStructureChoose')
  },
  {
    path: '/company-individual',
    name: 'CompanyIndividual',
    meta: { layout: 'main' },
    component: () => import('../views/company-structure/company-individual/company-individual')
  },
  {
    path: '/company-legal',
    name: 'CompanyLegal',
    meta: { layout: 'main' },
    component: () => import('../views/company-structure/company-legal/company-legal')
  },
  {
    path: '/upload-documents',
    name: 'UploadDocuments',
    meta: { layout: 'main' },
    component: () => import('../views/upload-documents/upload-documents')
  },
  {
    path: '/review-submit',
    name: 'ReviewSubmit',
    meta: { layout: 'main' },
    component: () => import('../views/review-submit/review-submit')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
