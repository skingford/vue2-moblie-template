<!--
 * @Author: kingford
 * @Date: 2021-10-27 15:12:46
 * @LastEditTime: 2021-10-27 17:42:19
-->
<template>
  <div class="bg-h">
    <van-cell-group class="mb-1">
      <van-cell icon="setting-o" title="mqtt" is-link to="/communication/mqtt" />
    </van-cell-group>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'Communication' })
export default class Communication extends Vue {}
</script>
