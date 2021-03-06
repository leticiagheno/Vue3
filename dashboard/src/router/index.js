import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/views/Home/Home.vue')
const Feedbacks = () => import('@/views/Feedbacks/Feedbacks.vue')
const Credentials = () => import('@/views/Credentials/Credentials.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: Feedbacks,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/credentials',
    name: 'Credentials',
    component: Credentials,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: Home }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
