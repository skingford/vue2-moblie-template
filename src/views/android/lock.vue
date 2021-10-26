<!--
 * @Author: kingford
 * @Date: 2021-10-22 09:48:04
 * @LastEditTime: 2021-10-26 20:03:02
-->
<template>
  <div class="lock">
    <van-cell-group inset>
      <van-cell icon="setting-o" title="查询单锁" @click="testQuery" />
      <van-cell icon="setting-o" title="查询所有锁" @click="testQueryAll" />
      <van-cell icon="setting-o" title="开单锁" @click="testOpen" />
      <van-cell icon="setting-o" title="全开锁" @click="testOpenAll" />
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { locker } from '@/utils/android/hardware';
import { toast } from '@/utils/android/tools';
import { Toast } from 'vant';

@Component({
  components: {},
})
export default class Home extends Vue {
  testQuery() {
    toast('查询单锁');
    locker
      .getStatus(1, 1)
      .then((res) => {
        console.log('testQuery.res：', res);
      })
      .catch((err) => {
        console.log('testQuery.err：', err);
      });
  }

  testQueryAll() {
    toast('查询所有锁');
    locker
      .getAllStatus()
      .then((res) => {
        console.log('testQueryAll.res：', res);
      })
      .catch((err) => {
        console.log('testQueryAll.err：', err);
      });
  }

  testOpen() {
    toast('开锁');
    locker
      .open(1, 1)
      .then((res) => {
        console.log('testOpen.res：', res);
      })
      .catch((err) => {
        console.log('testOpen.err：', err);
      });
  }

  testOpenAll() {
    toast('开所有锁');
    locker
      .openAll(1)
      .then((res) => {
        console.log('testOpenAll.res：', res);
      })
      .catch((err) => {
        console.log('testOpenAll.err', err);
      });
  }
}
</script>
