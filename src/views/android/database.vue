<!--
 * @Author: kingford
 * @Date: 2021-10-22 09:48:04
 * @LastEditTime: 2021-10-26 20:09:28
-->
<template>
  <div class="lock">
    <van-cell-group inset>
      <van-cell icon="setting-o" title="建表" @click="testDbConfig" />
      <van-cell icon="setting-o" title="影子数据库" @click="testDbConfig2" />
      <van-cell icon="setting-o" title="查询1数据" @click="test1Query" />
      <van-cell icon="setting-o" title="查询数据" @click="testQuery" />
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { dbConfig, crud, table } from '@/utils/android/database';
import { toast } from '@/utils/android/common';
import { Toast } from 'vant';

@Component({
  components: {},
})
export default class Home extends Vue {
  testDbConfig() {
    toast('建表');
    dbConfig
      .init('test1', { name: 'string', id: 'int' }, ['name'])
      .then((res) => {
        console.log('testDbConfig.res：', res);
      })
      .catch((err) => {
        console.log('testDbConfig.err：', err);
      });
  }

  testDbConfig2() {
    toast('建影子表');
    dbConfig
      .initShadow('test2', { name: 'string', id: 'int' }, ['name'], 'pad', 'id')
      .then((res) => {
        console.log('testDbConfig2.res：', res);
      })
      .catch((err) => {
        console.log('testDbConfig2.err：', err);
      });
  }

  testQuery() {
    toast('查询数据库');
    crud
      .select(table('test2').fields('*').build())
      .then((res) => {
        console.log('testQuery.res：', res);
      })
      .catch((err) => {
        console.log('testQuery.err：', err);
      });
  }

  test1Query() {
    toast('查询数据库');
  }
}
</script>
