<script lang="ts">
import { Vue, Component } from 'vue-facing-decorator';
import { applyTheme } from '@/logic/theme'
import Navigator from '@/components/Navigator.vue'
import {getLang} from '@/logic/lang'
import Bottom from '@/components/Bottom.vue'

@Component({
  components: { Bottom, Navigator }
})
export default class App extends Vue {
  mounted() {
    applyTheme()
    document.getElementById("app").dataset.lang = getLang()
  }
}
</script>

<template>
  <Navigator />
  <div class="placeholder"/>
  <RouterView :key="$route.fullPath"/>
  <div class="placeholder"/>
  <div class="placeholder"/>
  <Bottom />
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
