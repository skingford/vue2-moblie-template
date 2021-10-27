/*
 * @Author: kingford
 * @Date: 2021-10-27 11:22:51
 * @LastEditTime: 2021-10-27 11:30:45
 */
import { LAYOUT } from '@/router/constant';

const errorRoute = {
  path: '/error',
  component: LAYOUT,
  redirect: '/error/404',
  name: 'ErrorPages',
  meta: {
    title: 'Error Pages',
    icon: '404',
  },
  children: [
    {
      path: '401',
      component: () => import('@/views/error-page/401.vue'),
      name: 'Page401',
      meta: { title: '401', noCache: true },
    },
    {
      path: '404',
      component: () => import('@/views/error-page/404.vue'),
      name: 'Page404',
      meta: { title: '404', noCache: true },
    },
  ],
};

export default errorRoute;
