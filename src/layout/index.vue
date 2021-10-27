<!--
 * @Author: kingford
 * @Date: 2021-10-27 09:59:15
 * @LastEditTime: 2021-10-27 11:55:24
-->
<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AppHeader, AppTabbar } from './components';

@Component({ name: 'Layout', components: { AppHeader } })
export default class Layout extends Vue {}
</script>
