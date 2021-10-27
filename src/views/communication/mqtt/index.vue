<!--
 * @Author: kingford
 * @Date: 2021-10-27 17:32:17
 * @LastEditTime: 2021-10-27 17:46:33
-->
<template>
  <van-cell-group>
    <van-cell icon="setting-o" title="发送消息" />
    <van-cell icon="setting-o" title="一应一答" />
    <van-cell icon="setting-o" title="接受消息" />
  </van-cell-group>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'CommunicationMQTT' })
export default class CommunicationMQTT extends Vue {}
</script>
