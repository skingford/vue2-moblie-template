<!--
 * @Author: kingford
 * @Date: 2021-10-27 17:33:11
 * @LastEditTime: 2021-10-28 20:20:25
-->
<template>
  <van-cell-group>
    <van-cell icon="setting-o" title="建表" @click="testCreate" />
    <van-cell icon="setting-o" title="建影子表" @click="testCreateShadow" />
    <van-cell icon="setting-o" title="插数据" @click="testInsert" />
    <van-cell icon="setting-o" title="删除一条" @click="testRemove(true)" />
    <van-cell icon="setting-o" title="删除所有" @click="testRemove(false)" />
    <van-cell icon="setting-o" title="更新所有" @click="testUpdate(false)" />
    <van-cell icon="setting-o" title="检索" @click="testSelect(false)" />
    <van-cell icon="setting-o" title="检索一条" @click="testSelect(true)" />
  </van-cell-group>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { crud } from '@/utils/android/database';

@Component({ name: 'Database' })
export default class Database extends Vue {
  testCreate() {
    this.$toast.loading({
      duration: 0,
      forbidClick: true,
      message: '建表...',
    });
    crud
      .createTable('test1', { name: 'string', id: 'int' }, ['name'])
      .then((res) => {
        this.$toast.success('建表成功');
        console.log(res);
      })
      .catch((err) => {
        this.$toast.fail('建表失败：' + err.result);
        console.log(err);
      });
  }
  testCreateShadow() {
    this.$toast.loading({
      duration: 0,
      forbidClick: true,
      message: '建影子表...',
    });
    crud
      .createShadowTable('test2', { name: 'string', id: 'int' }, ['id'], 'pad', 'id')
      .then((res) => {
        this.$toast.success('建影子表成功');
        console.log(res);
      })
      .catch((err) => {
        this.$toast.fail('建影子表失败：' + err.result);
        console.log(err);
      });
  }

  testInsert() {
    this.$toast.loading({
      duration: 0,
      forbidClick: true,
      message: '插数据...',
    });
    crud
      .insert('test2', [
        { name: 'dds', id: 100 },
        { name: 'dds', id: 101 },
        { name: 'dds', id: 2 },
        { name: 'dds', id: 103 },
      ])
      .then((res) => {
        this.$toast.success('建影子表成功');
        console.log(res);
      })
      .catch((err) => {
        this.$toast.fail('建影子表失败：' + err.result);
        console.log(err);
      });
  }

  testRemove(isOne = true) {
    this.$toast.loading({
      duration: 0,
      forbidClick: true,
      message: '删除数据...',
    });

    const query = isOne
      ? android.table('test2').fields('*').where('id', '=', 10).build()
      : android.table('test2').build();

    crud
      .remove(query)
      .then((res) => {
        this.$toast.success('删除数据成功');
        console.log(res);
      })
      .catch((err) => {
        this.$toast.fail('删除数据失败：' + err.result);
        console.log(err);
      });
  }

  testUpdate(isOne = true) {
    this.$toast.loading({
      duration: 0,
      forbidClick: true,
      message: '更新数据...',
    });

    const query = isOne
      ? android.table('test2').where('id', 100).build()
      : android.table('test2').build();

    crud
      .update(query, { name: 'PP>' })
      .then((res) => {
        this.$toast.success('更新数据成功');
        console.log(res);
      })
      .catch((err) => {
        this.$toast.fail('更新数据失败：' + err.result);
        console.log(err);
      });
  }

  testSelect(isOne: boolean = false) {
    this.$toast.loading({
      duration: 0,
      forbidClick: true,
      message: '检索...',
    });

    const query = isOne
      ? android.table('test2').fields('*').where('id', 100).build()
      : android.table('test2').fields('*').build();

    crud
      .select(query)
      .then((res) => {
        this.$toast.success('检索成功:' + res.result);
        console.log(res);
      })
      .catch((err) => {
        this.$toast.success('检索失败');
        console.log(err);
      });
  }
}
</script>
