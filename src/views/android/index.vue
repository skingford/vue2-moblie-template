<!--
 * @Author: kingford
 * @Date: 2021-10-22 09:48:04
 * @LastEditTime: 2021-10-26 20:12:22
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
      <van-cell icon="setting-o" title="发送串口指令" @click="testCmd" />
    </van-cell-group>

    <van-cell-group inset>
      <van-cell icon="setting-o" title="锁操作" is-link to="/lock" />
      <van-cell icon="setting-o" title="数据库操作" is-link to="/database" />
      <van-cell icon="setting-o" title="文件操作" is-link to="/file" />
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { info, cmd, locker } from '@/utils/android/hardware';
import { toast } from '@/utils/android/tools';
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
