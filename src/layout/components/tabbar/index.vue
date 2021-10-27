<!--
 * @Author: kingford
 * @Date: 2021-10-27 10:00:10
 * @LastEditTime: 2021-10-27 11:54:08
-->
<template>
  <van-tabbar route active-color="#1989fa" inactive-color="#ccc" safe-area-inset-bottom>
    <van-tabbar-item replace to="/tabbar/home" icon="wap-home-o">主页面</van-tabbar-item>
    <van-tabbar-item replace to="/tabbar/news" icon="manager-o" :badge="msgNum">
      消息
    </van-tabbar-item>
    <van-tabbar-item replace to="/tabbar/me" icon="manager-o"> 个人中心 </van-tabbar-item>
  </van-tabbar>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({ name: 'AppTabbar' })
export default class AppTabbar extends Vue {
  msgNum = 0;

  mounted() {
    this.msgNum = Math.floor(Math.random() * 100);
  }
}
</script>
