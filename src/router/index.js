import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/search/:category?',
    name: 'search',
    component: SearchPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
