/*
 * @Author: kingford
 * @Date: 2021-10-27 10:18:24
 * @LastEditTime: 2021-10-27 11:34:49
 */
import { RouteConfig } from 'vue-router';
import { RootRoute, LoginRoute, NotFoundRoute, routeModuleList } from './base';

export const asyncRoutes = [...routeModuleList];

export const basicRoutes = [RootRoute, LoginRoute, ...asyncRoutes, NotFoundRoute];
