/*
 * @Author: kingford
 * @Date: 2021-10-27 16:26:57
 * @LastEditTime: 2021-10-27 16:41:57
 */
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import router from '@/router';
import getPageTitle from '@/settings/pageTitle';

router.beforeEach((to, from, next) => {
  NProgress.start();
  document.title = getPageTitle(to.meta?.title);

  next();
});

router.afterEach((to, from) => {
  NProgress.done();
});
