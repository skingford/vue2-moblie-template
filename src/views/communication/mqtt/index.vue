<!--
 * @Author: kingford
 * @Date: 2021-10-27 17:32:17
 * @LastEditTime: 2021-10-28 10:14:27
-->
<template>
  <van-cell-group>
    <van-cell icon="setting-o" title="发送消息" @click="testSend" />
    <van-cell icon="setting-o" title="一应一答" @click="testSendOtO" />
    <van-cell icon="setting-o" title="接受消息" @click="testAdd" />
  </van-cell-group>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import mqtt from '@/utils/android/mqtt';

@Component({ name: 'CommunicationMQTT' })
export default class CommunicationMQTT extends Vue {
  testSend() {
    this.$toast.loading({
      duration: 0,
      forbidClick: true,
      message: '发送消息...',
    });
    mqtt
      .send('dsdsds', 'testinfo', 0, false)
      .then((res) => {
        this.$toast.success('发送消息成功');
        console.log('testQuery.res：', res);
      })
      .catch((err) => {
        this.$toast.fail('发送消息失败：' + err.result);
      });
  }

  testSendOtO() {
    this.$toast.loading({
      duration: 0,
      forbidClick: true,
      message: '一应一答...',
    });
    mqtt
      .sendOtO('dsdsds')
      .then((res) => {
        this.$toast.success('一应一答成功');
        console.log('testQuery.res：', res);
      })
      .catch((err) => {
        this.$toast.fail('一应一答失败：' + err.result);
      });
  }

  testAdd() {
    mqtt.add().then((res) => {
      this.$toast.success('mqtt消息接收');
      console.log('testQuery.res：', res);
    });
  }
}
</script>
