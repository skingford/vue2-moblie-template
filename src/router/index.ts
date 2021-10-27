/*
 * @Author: kingford
 * @Date: 2021-10-22 09:48:04
 * @LastEditTime: 2021-10-27 16:57:51
 */
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { basicRoutes } from './routes';

Vue.use(VueRouter);

const createRouter = () =>
  new VueRouter({
    mode: 'hash',
    scrollBehavior: () => ({ y: 0, x: 0 }),
    base: process.env.BASE_URL,
    routes: basicRoutes as Array<RouteConfig>,
  });

const router = createRouter();

export default router;
