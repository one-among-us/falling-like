<script lang="ts">
import { Vue, Component } from 'vue-facing-decorator';
import { applyTheme } from '@/logic/theme'
import Navigator from '@/components/Navigator.vue'

@Component({
  components: { Navigator }
})
export default class App extends Vue {
  mounted() {
    applyTheme()
  }
}
</script>

<template>
  <Navigator />
  <div class="placeholder"/>
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
  background-color: var(--background);
  color: var(--text);
}

#app {
  min-height: 100vh;
  height: fit-content;
  width: 100%;
  max-width: $max-width;
  margin: 0 auto;
}
</style>
