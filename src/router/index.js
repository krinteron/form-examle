import { createRouter, createWebHistory } from 'vue-router';
import Form from '../views/Form.vue';

const routes = [
  {
    path: '/',
    name: 'form',
    component: Form,
  },
  {
    path: '/preview',
    name: 'preview',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Preview.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
