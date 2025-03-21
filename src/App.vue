<script lang="ts">
import { Vue, Component } from 'vue-facing-decorator';

@Component({})
export default class App extends Vue {

}
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
@import '@/css/global';
@import '@/css/font';
@import '@/css/variables';

* {
  transition: all 0.5s ease-in-out;
}

body {
  font-family: $font-family-base;
}

#app {
  min-height: 100vh;
  height: fit-content;
  width: 100%;
  max-width: $max-width;
  margin: 0 auto;
}
</style>
