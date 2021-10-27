/*
 * @Author: kingford
 * @Date: 2021-10-27 15:11:25
 * @LastEditTime: 2021-10-27 16:25:37
 */
import { RouteConfig } from 'vue-router';
import { LAYOUT } from '@/router/constant';

const file: RouteConfig = {
  path: '/file',
  component: LAYOUT,
  meta: {
    title: '数据存储',
    icon: 'wap-home-o',
  },
  children: [
    {
      path: '',
      name: 'File',
      component: () => import('@/views/file/index.vue'),
      meta: {
        title: '通信服务',
      },
    },
  ],
};

export default file;