/*
 * @Author: kingford
 * @Date: 2021-10-22 15:48:31
 * @LastEditTime: 2021-10-27 14:10:48
 */

import { VueConstructor } from 'vue';
import { Button, CellGroup, Cell, NavBar, Tabbar, TabbarItem, Grid, GridItem, Icon } from 'vant';

const VANT_COMPONENTS = [Button, CellGroup, Cell, NavBar, Tabbar, TabbarItem, Grid, GridItem, Icon];

export function setupVant(Vue: VueConstructor<Vue>): void {
  VANT_COMPONENTS.forEach((comp) => {
    Vue.use(comp);
  });
}
