<!--
 * @Author: kingford
 * @Date: 2021-10-22 09:48:04
 * @LastEditTime: 2021-10-23 15:27:44
-->
<template>
  <div class="home"> home </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  state = {};

  created() {
    this.getInfo();
  }

  private getInfo(): void {
    console.log('created get info', this.state);
  }
}
</script>
