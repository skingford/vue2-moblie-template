<!--
 * @Author: kingford
 * @Date: 2021-10-22 09:48:04
 * @LastEditTime: 2021-10-27 17:13:35
-->
<template>
  <div class="lock">
    <van-cell-group>
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
import { toast } from '@/utils/android/common';
import { Toast } from 'vant';

@Component({
  name: 'HardwareLock',
})
export default class Home extends Vue {
  testQuery() {
    this.$toast.loading({
      duration: 0,
      forbidClick: true,
      message: '查询单锁...',
    });

    locker
      .getStatus(1, 1)
      .then((res) => {
        this.$toast.success('查询单锁成功');
        console.log('testQuery.res：', res);
      })
      .catch((err) => {
        this.$toast.fail('查询单锁失败：' + err.result);
      });
  }

  testQueryAll() {
    this.$toast.loading({
      duration: 0,
      forbidClick: true,
      message: '查询所有锁...',
    });

    locker
      .getAllStatus()
      .then((res) => {
        this.$toast.success('查询单锁成功');
        console.log('testQueryAll.res：', res);
      })
      .catch((err) => {
        this.$toast.fail('查询所有锁失败：' + err.result);
        console.log('testQueryAll.err：', err);
      });
  }

  testOpen() {
    this.$toast.loading({
      duration: 0,
      forbidClick: true,
      message: '开单锁...',
    });

    locker
      .open(1, 1)
      .then((res) => {
        this.$toast.success('开单锁成功');
        console.log('testOpen.res：', res);
      })
      .catch((err) => {
        this.$toast.fail('开单锁失败：' + err.result);
        console.log('testOpen.err：', err);
      });
  }

  testOpenAll() {
    this.$toast.loading({
      duration: 0,
      forbidClick: true,
      message: '开所有锁...',
    });

    locker
      .openAll(1)
      .then((res) => {
        this.$toast.success('开所有锁成功');
        console.log('testOpenAll.res：', res);
      })
      .catch((err) => {
        this.$toast.fail('开所有锁失败：' + err.result);
        console.log('testOpenAll.err', err);
      });
  }
}
</script>
