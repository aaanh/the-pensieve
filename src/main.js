import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('./components/Home.vue') },
    { path: '/whoami', component: () => import('./components/Whoami.vue') },
    { path: '/:pathMatch(.*)*', component: () => import('./components/NotFound.vue') }
  ]
})

createApp(App)
  .use(router)
  .mount('#app')
