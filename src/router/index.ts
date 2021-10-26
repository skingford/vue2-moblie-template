/*
 * @Author: kingford
 * @Date: 2021-10-22 09:48:04
 * @LastEditTime: 2021-10-26 15:46:39
 */
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/android',
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/android',
    name: 'Android',
    component: () => import('../views/android/index.vue'),
  },
  {
    path: '/lock',
    name: 'Lock',
    component: () => import('../views/android/lock.vue'),
  },
  {
    path: '/database',
    name: 'Database',
    component: () => import('../views/android/database.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
