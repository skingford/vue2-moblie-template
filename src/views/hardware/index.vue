<!--
 * @Author: kingford
 * @Date: 2021-10-22 09:48:04
 * @LastEditTime: 2021-10-27 17:14:43
-->
<template>
  <div class="bg-h">
    <van-cell-group class="mb-1">
      <van-cell icon="setting-o" title="发送串口指令" is-link to="/hardware/cmd" />
      <van-cell icon="setting-o" title="锁操作" is-link to="/hardware/lock" />
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="bill-o" title="webApp版本号" :value="state.webAppVersion" @click="getInfo" />
      <van-cell icon="manager-o" title="appId" :value="state.appId" />
      <van-cell icon="balance-o" title="mac地址" :value="state.mac" />
      <van-cell icon="balance-o" title="app版本" :value="state.appVersion" />
      <van-cell icon="balance-o" title="os版本" :value="state.osVersion" />
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { info, cmd, locker } from '@/utils/android/hardware';
import { toast } from '@/utils/android/common';
import { Toast } from 'vant';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  state = {
    ...info.info,
  };

  created() {
    this.getInfo();
  }

  testLock() {}

  testCmd() {
    toast('发送串口指令');
    cmd
      .sendSerial('AA010104000000000000000004DF')
      .then((res) => {
        console.log('res:', res);
        toast(res);
      })
      .catch((err) => {
        // code ,result
        console.log('err:', err);

        Toast(err.result);
      });
  }

  private getInfo(): void {
    console.log('created get info', this.state);
  }
}
</script>
