/*
 * @Author: kingford
 * @Date: 2021-10-22 15:48:31
 * @LastEditTime: 2021-10-22 16:04:07
 */

import { Button } from "vant";

const VANT_COMPONENTS = [Button];

export function setupVant(Vue: any): void {
  VANT_COMPONENTS.forEach((comp) => {
    Vue.use(comp);
  });
}
