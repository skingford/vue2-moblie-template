/*
 * @Author: kingford
 * @Date: 2021-10-22 15:48:31
 * @LastEditTime: 2021-10-27 10:02:59
 */

import { VueConstructor } from 'vue';
import { Button, CellGroup, Cell, NavBar } from 'vant';

const VANT_COMPONENTS = [Button, CellGroup, Cell, NavBar];

export function setupVant(Vue: VueConstructor<Vue>): void {
  VANT_COMPONENTS.forEach((comp) => {
    Vue.use(comp);
  });
}
