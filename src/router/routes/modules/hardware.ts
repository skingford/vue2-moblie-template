/*
 * @Author: kingford
 * @Date: 2021-10-27 15:04:57
 * @LastEditTime: 2021-10-27 15:49:42
 */
import { RouteConfig } from 'vue-router';
import { LAYOUT } from '@/router/constant';

const hardware: RouteConfig = {
  path: '/hardware',
  name: 'Hardware',
  component: LAYOUT,
  meta: {
    title: '菜单',
    icon: 'wap-home-o',
  },
  children: [
    {
      path: '',
      name: 'HardwareHome',
      component: () => import('@/views/hardware/index.vue'),
      meta: {
        title: '菜单',
      },
    },
    {
      path: 'cmd',
      name: 'HardwareCmd',
      component: () => import('@/views/hardware/cmd/index.vue'),
      meta: {
        title: '菜单',
      },
    },
  ],
};

export default hardware;
