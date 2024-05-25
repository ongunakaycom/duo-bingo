import { createRouter, createWebHistory } from 'vue-router';

// Make sure to correct the import path if the actual location of Home.vue is different
import Home from '../views/Home.vue'; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;