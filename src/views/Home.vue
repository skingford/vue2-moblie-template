<!--
 * @Author: kingford
 * @Date: 2021-10-22 09:48:04
 * @LastEditTime: 2021-10-23 11:57:13
-->
<template>
  <div class="home">
    <van-button type="primary">vant</van-button>
    <van-cell-group class="group-item" inset>
      <van-cell icon="bill-o" title="版本号" :value="state.version" @click="getInfo" />
      <van-cell icon="manager-o" title="appId" :value="state.appId" />
      <van-cell icon="balance-o" title="mac地址" :value="state.mac" />
    </van-cell-group>
    <van-cell-group inset>
      <van-cell icon="setting-o" title="发送串口指令" is-link to="/system/error-log" />
      <van-cell icon="setting-o" title="设置" is-link to="/me/setting" />
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { hardwareInfo } from '@/utils/android/hardware';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  state = {
    version: hardwareInfo.version,
    appId: hardwareInfo.appId,
    mac: hardwareInfo.mac,
  };

  created() {
    this.getInfo();
  }

  private getInfo(): void {
    console.log('created get info');
  }
}
</script>
