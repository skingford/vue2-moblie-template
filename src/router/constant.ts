/*
 * @Author: kingford
 * @Date: 2021-10-27 10:16:41
 * @LastEditTime: 2021-10-27 11:26:40
 */

export const REDIRECT_NAME = 'Redirect';

export const PARENT_LAYOUT_NAME = 'ParentLayout';

export const PAGE_NOT_FOUND_NAME = 'PageNotFound';

export const LAYOUT = () => import('@/layout/index.vue');
export const EXCEPTION_COMPONENT = () => import('@/views/error-page/404.vue');
