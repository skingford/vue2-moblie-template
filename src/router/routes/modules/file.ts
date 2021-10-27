/*
 * @Author: kingford
 * @Date: 2021-10-27 15:11:25
 * @LastEditTime: 2021-10-27 17:50:05
 */
import { RouteConfig } from 'vue-router';
import { LAYOUT } from '@/router/constant';

const file: RouteConfig = {
  path: '/file',
  name: 'File',
  component: LAYOUT,
  meta: {
    title: '文件',
    icon: 'wap-home-o',
  },
  children: [
    {
      path: '',
      name: 'FileHome',
      component: () => import('@/views/file/index.vue'),
      meta: {
        title: '文件操作',
      },
    },
  ],
};

export default file;
