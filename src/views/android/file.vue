<!--
 * @Author: kingford
 * @Date: 2021-10-22 09:48:04
 * @LastEditTime: 2021-10-26 20:16:58
-->
<template>
  <div class="lock">
    <van-cell-group inset>
      <van-cell icon="setting-o" title="读取文件" @click="testRead" />
      <van-cell icon="setting-o" title="读取分页文件" @click="testReadPage" />
      <van-cell icon="setting-o" title="写入文件" @click="testWrite" />
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { file } from '@/utils/android/file';
import { toast } from '@/utils/android/tools';
import { Toast } from 'vant';

@Component({
  components: {},
})
export default class Home extends Vue {
  testRead() {
    toast('读取文件');
    file
      .read('/sdcard/mt_quality/28:11:21:04:22:1a_u202_2021-10-20-12:35:34:303.log')
      .then((res) => {
        console.log('testQuery.res：', res);
      })
      .catch((err) => {
        console.log('testQuery.err：', err);
      });
  }

  testReadPage() {
    toast('分页读取文件');
    file
      .readPage('/sdcard/mt_quality/28:11:21:04:22:1a_u202_2021-10-20-12:35:34:303.log', 0, 10)
      .then((res) => {
        console.log('testQuery.res：', res);
      })
      .catch((err) => {
        console.log('testQuery.err：', err);
      });
  }

  testWrite() {
    toast('写入文件');
    file
      .write('/sdcard/mt_quality/28:11:21:04:22:1a_u202_2021-10-20-12:35:34:303.log', '写入文件')
      .then((res) => {
        console.log('testQuery.res：', res);
      })
      .catch((err) => {
        console.log('testQuery.err：', err);
      });
  }
}
</script>
