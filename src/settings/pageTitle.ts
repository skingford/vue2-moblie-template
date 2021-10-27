/*
 * @Author: kingford
 * @Date: 2021-10-27 16:30:39
 * @LastEditTime: 2021-10-27 16:36:25
 */

const title = process.env.VUE_GLOB_APP_TITLE || 'vue2-tpl';

export default function getPageTitle(pageTitle: string): string {
  if (pageTitle) {
    return `${pageTitle} - ${title}`;
  }
  return `${title}`;
}
