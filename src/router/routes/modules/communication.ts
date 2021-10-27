/*
 * @Author: kingford
 * @Date: 2021-10-27 15:11:25
 * @LastEditTime: 2021-10-27 16:25:37
 */
import { RouteConfig } from 'vue-router';
import { LAYOUT } from '@/router/constant';

const communication: RouteConfig = {
  path: '/communication',
  name: 'Communication',
  component: LAYOUT,
  meta: {
    title: '通信服务',
    icon: 'wap-home-o',
  },
  children: [
    {
      path: '',
      name: 'CommunicationHome',
      component: () => import('@/views/communication/index.vue'),
      meta: {
        title: '通信服务',
      },
    },
  ],
};

export default communication;
