/*
 * @Author: kingford
 * @Date: 2021-10-22 15:48:31
 * @LastEditTime: 2021-10-23 11:29:23
 */

import { VueConstructor } from 'vue';
import { Button, CellGroup, Cell } from 'vant';

const VANT_COMPONENTS = [Button, CellGroup, Cell];

export function setupVant(Vue: VueConstructor<Vue>): void {
  VANT_COMPONENTS.forEach((comp) => {
    Vue.use(comp);
  });
}
