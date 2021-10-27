<!--
 * @Author: kingford
 * @Date: 2021-10-27 11:40:48
 * @LastEditTime: 2021-10-27 14:58:45
-->
<template>
  <div class="app-layout">
    <app-header :leftArrow="false"></app-header>
    <router-view></router-view>
    <app-tabbar></app-tabbar>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AppHeader, AppTabbar } from './components';

@Component({ name: 'Tabbar', components: { AppHeader, AppTabbar } })
export default class Tabbar extends Vue {}
</script>

<style lang="scss" scoped src="./styles/index.scss"></style>
