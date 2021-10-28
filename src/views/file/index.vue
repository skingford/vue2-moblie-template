<!--
 * @Author: kingford
 * @Date: 2021-10-27 17:32:56
 * @LastEditTime: 2021-10-28 11:42:40
-->
<template>
  <van-cell-group>
    <van-cell icon="setting-o" title="读文件" />
    <van-cell icon="setting-o" title="写文件" />
    <van-cell icon="setting-o" title="分页读取文件内容" />
    <van-cell icon="setting-o" title="获取文件家下所有文件列表" />
  </van-cell-group>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { file } from '@/utils/android';

@Component({ name: 'File' })
export default class FileComp extends Vue {
  testRead() {
    this.$toast.loading({
      duration: 0,
      forbidClick: true,
      message: '读文件...',
    });

    file
      .read('/sdcard/mt_quality/28:11:21:04:22:1a_u202_2021-10-20-12:35:34:303.log')
      .then((res) => {
        this.$toast.success('读文件:' + res.result);
        console.log(res);
      })
      .catch((err) => {
        this.$toast.success('读文件');
        console.log(err);
      });
  }
}
</script>
