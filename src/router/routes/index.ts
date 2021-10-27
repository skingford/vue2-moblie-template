/*
 * @Author: kingford
 * @Date: 2021-10-27 10:18:24
 * @LastEditTime: 2021-10-27 11:31:26
 */
import { RouteConfig } from 'vue-router';
import { PageEnum } from '@/enums';

const routeModuleList: RouteConfig[] = [];

dynamicRouteModules();

function dynamicRouteModules() {
  const req = require.context('./modules', false, /\.ts$/);
  const requireAll = (requireContext: any) => requireContext.keys().map(requireContext);
  const modules = requireAll(req);
  modules.forEach((module: any) => {
    const mod = module.default || {};
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    routeModuleList.push(...modList);
  });
}

export const RootRoute: RouteConfig = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root',
  },
};

export const LoginRoute = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/login/index.vue'),
  meta: {
    title: '登录',
  },
};

export const NotFoundRoute = { path: '*', redirect: '/error/404' };

export const asyncRoutes = [...routeModuleList];

export const basicRoutes = [RootRoute, LoginRoute, ...asyncRoutes, NotFoundRoute];
