<!--
 * @Author: kingford
 * @Date: 2021-10-27 10:00:04
 * @LastEditTime: 2021-10-27 16:49:08
-->
<template>
  <van-nav-bar
    safe-area-inset-top
    fixed
    :title="currentTitle"
    :left-text="leftText"
    :right-text="rightText"
    :left-arrow="leftArrow"
    :border="border"
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({ name: 'AppHeader' })
export default class AppHeader extends Vue {
  @Prop({ default: '首页' }) private title!: string;
  @Prop({ default: '' }) private leftText!: string;
  @Prop({ default: '' }) private rightText!: string;
  @Prop({ default: true }) private leftArrow!: boolean;
  @Prop({ default: true }) private border!: boolean;

  get currentTitle() {
    return this.$route.meta?.title;
  }

  created() {}

  onClickLeft() {
    this.$router.back();
  }

  onClickRight() {}
}
</script>
