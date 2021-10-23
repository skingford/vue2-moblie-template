/*
 * @Author: kingford
 * @Date: 2021-10-22 15:48:31
 * @LastEditTime: 2021-10-23 17:59:31
 */

import { VueConstructor } from 'vue';
import { Button, CellGroup, Cell } from 'vant';

const VANT_COMPONENTS = [Button, CellGroup, Cell];

export function setupVant(Vue: VueConstructor<Vue>): void {
  VANT_COMPONENTS.forEach((comp) => {
    Vue.use(comp);
  });
}
