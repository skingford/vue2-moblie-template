/*
 * @Author: kingford
 * @Date: 2021-10-27 10:13:43
 * @LastEditTime: 2021-10-27 11:23:19
 */
import { RouteConfig } from 'vue-router';
import { LAYOUT } from '@/router/constant';

const tabbar: RouteConfig = {
  path: '/tabbar',
  name: 'Tabbar',
  component: LAYOUT,
  redirect: '/tabbar/home',
  meta: {
    title: '菜单',
    icon: 'wap-home-o',
  },
  children: [
    {
      path: 'home',
      name: 'TabbarHome',
      component: () => import('@/views/android/index.vue'),
      meta: {
        title: '菜单',
      },
    },
  ],
};

export default tabbar;
