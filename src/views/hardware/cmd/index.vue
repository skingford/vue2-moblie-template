<!--
 * @Author: kingford
 * @Date: 2021-10-27 15:47:04
 * @LastEditTime: 2021-10-27 16:22:38
-->
<template>
  <div class="bg-h">
    <van-cell-group>
      <van-cell>
        <van-form @submit="onSubmit">
          <van-field
            v-model="form.cmd"
            name="串口指令"
            label="串口指令"
            placeholder="发送串口指令"
            :rules="[{ required: true, message: '请填写串口指令' }]"
          />
          <div class="mt-2">
            <van-button round block type="info" native-type="submit">提交</van-button>
          </div>
        </van-form>
      </van-cell>
    </van-cell-group>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { cmd } from '@/utils/android/hardware';
@Component({ name: 'HardwareCmd' })
export default class HardwareCmd extends Vue {
  private form = { cmd: 'AA010104000000000000000004DF' };

  onSubmit() {
    this.$toast.loading({
      duration: 0,
      forbidClick: true,
      message: '发送中...',
    });

    cmd
      .sendSerial(this.form.cmd)
      .then((res) => {
        this.$toast.success('发送串口指令成功');
        console.log('发送串口指令成功:', res);
      })
      .catch((err) => {
        this.$toast.fail('发送串口指令失败：' + err.result);
      });
  }
}
</script>
