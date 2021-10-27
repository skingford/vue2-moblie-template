/*
 * @Author: kingford
 * @Date: 2021-10-27 15:11:25
 * @LastEditTime: 2021-10-27 16:25:37
 */
import { RouteConfig } from 'vue-router';
import { LAYOUT } from '@/router/constant';

const database: RouteConfig = {
  path: '/database',
  name: 'Database',
  component: LAYOUT,
  meta: {
    title: '数据存储',
    icon: 'wap-home-o',
  },
  children: [
    {
      path: '',
      name: 'DatabaseHome',
      component: () => import('@/views/database/index.vue'),
      meta: {
        title: '通信服务',
      },
    },
  ],
};

export default database;
