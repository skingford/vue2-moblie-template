<!--
 * @Author: kingford
 * @Date: 2021-10-22 09:48:04
 * @LastEditTime: 2021-10-23 15:35:06
-->
<template>
  <div class="home">
    <van-cell-group class="group-item" inset>
      <van-cell icon="bill-o" title="webApp版本号" :value="state.webAppVersion" @click="getInfo" />
      <van-cell icon="manager-o" title="appId" :value="state.appId" />
      <van-cell icon="balance-o" title="mac地址" :value="state.mac" />
      <van-cell icon="balance-o" title="app版本" :value="state.appVersion" />
      <van-cell icon="balance-o" title="os版本" :value="state.osVersion" />
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
    ...hardwareInfo.info,
  };

  created() {
    this.getInfo();
  }

  private getInfo(): void {
    console.log('created get info', this.state);
  }
}
</script>
