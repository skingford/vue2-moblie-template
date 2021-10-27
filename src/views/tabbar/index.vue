<!--
 * @Author: kingford
 * @Date: 2021-10-27 14:03:44
 * @LastEditTime: 2021-10-27 14:42:36
-->
<template>
  <van-grid>
    <van-grid-item
      clickable
      v-for="menu in menus"
      :icon="menu.icon"
      :text="menu.text"
      :icon-color="menu.iconColor"
      :to="menu.path"
      :key="menu.path"
    />
  </van-grid>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({ name: 'TabbarHome' })
export default class TabbarHome extends Vue {
  private menus = [
    {
      icon: 'apps-o',
      text: '硬件操作',
      iconColor: '#2d8cf0',
      path: '/hardware',
    },
    {
      icon: 'phone-o',
      text: '通信服务',
      iconColor: '#2d8cf0',
      path: '/communication',
    },
    {
      icon: 'font-o',
      text: '数据存储',
      iconColor: '#2d8cf0',
      path: '/data-store',
    },
    {
      icon: 'other-pay',
      text: '其它',
      iconColor: '#2d8cf0',
      path: '/other',
    },
  ];
}
</script>
