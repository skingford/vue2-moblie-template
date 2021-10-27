<!--
 * @Author: kingford
 * @Date: 2021-10-27 17:32:56
 * @LastEditTime: 2021-10-27 17:48:35
-->
<template>
  <van-cell-group>
    <van-cell icon="setting-o" title="读文件" />
    <van-cell icon="setting-o" title="写文件" />
    <van-cell icon="setting-o" title="分页读取文件内容" />
    <van-cell icon="setting-o" title="获取文件家下所有文件列表" />
  </van-cell-group>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'File' })
export default class FileComp extends Vue {}
</script>
