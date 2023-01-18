import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'search',
    component: () => import('./views/ViewSearch.vue')
  },
  {
    path: '/movie/:id',
    name: 'movie',
    component: () => import('./views/ViewFilm.vue')
  },
]

export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})