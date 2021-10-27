<!--
 * @Author: kingford
 * @Date: 2021-10-27 17:33:11
 * @LastEditTime: 2021-10-27 17:47:21
-->
<template>
  <van-cell-group>
    <van-cell icon="setting-o" title="建表" />
    <van-cell icon="setting-o" title="建影子表" />
    <van-cell icon="setting-o" title="插数据" />
    <van-cell icon="setting-o" title="删除一条" />
    <van-cell icon="setting-o" title="删除所有" />
    <van-cell icon="setting-o" title="更新所有" />
    <van-cell icon="setting-o" title="检索" />
    <van-cell icon="setting-o" title="检索一条" />
  </van-cell-group>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'Database' })
export default class Database extends Vue {}
</script>
