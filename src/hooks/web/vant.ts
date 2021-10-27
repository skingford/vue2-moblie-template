/*
 * @Author: kingford
 * @Date: 2021-10-22 15:48:31
 * @LastEditTime: 2021-10-27 11:52:13
 */

import { VueConstructor } from 'vue';
import { Button, CellGroup, Cell, NavBar, Tabbar, TabbarItem } from 'vant';

const VANT_COMPONENTS = [Button, CellGroup, Cell, NavBar, Tabbar, TabbarItem];

export function setupVant(Vue: VueConstructor<Vue>): void {
  VANT_COMPONENTS.forEach((comp) => {
    Vue.use(comp);
  });
}
