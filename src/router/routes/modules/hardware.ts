/*
 * @Author: kingford
 * @Date: 2021-10-27 15:04:57
 * @LastEditTime: 2021-10-27 16:24:43
 */
import { RouteConfig } from 'vue-router';
import { LAYOUT } from '@/router/constant';

const hardware: RouteConfig = {
  path: '/hardware',
  name: 'Hardware',
  component: LAYOUT,
  meta: {
    title: '硬件列表',
    icon: 'wap-home-o',
  },
  children: [
    {
      path: '',
      name: 'HardwareHome',
      component: () => import('@/views/hardware/index.vue'),
      meta: {
        title: '硬件列表',
      },
    },
    {
      path: 'cmd',
      name: 'HardwareCmd',
      component: () => import('@/views/hardware/cmd/index.vue'),
      meta: {
        title: '串口命令',
      },
    },
  ],
};

export default hardware;
