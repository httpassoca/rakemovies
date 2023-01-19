import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'search',
    component: () => import('./views/ViewSearch.vue')
  },
  {
    path: '/movie/edit/:id',
    name: 'movie-edit',
    component: () => import('./views/ViewEditMovie.vue')
  },
  {
    path: '/movie/:id',
    name: 'movie',
    component: () => import('./views/ViewMovie.vue')
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
});