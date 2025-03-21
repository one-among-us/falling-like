<script lang="ts">
import { Vue, Component } from 'vue-facing-decorator'
import { Icon } from '@iconify/vue'
import { applyTheme, getTheme, setTheme } from '@/logic/theme'

@Component({
  components: {Icon}
})
export default class Navigator extends Vue {
  icon = "mynaui:sun"

  changeColor() {
    const theme = getTheme()
    if (theme === 'dark') {
      this.icon = "mynaui:sun"
      setTheme('light')
    }
    else if (theme === 'light') {
      this.icon = "mynaui:moon"
      setTheme('dark')
    }
    else if (theme === 'high-contrast-dark') {
      this.icon = "mynaui:sun"
      setTheme('high-contrast')
    }
    else if (theme === 'high-contrast') {
      this.icon = "mynaui:moon"
      setTheme('high-contrast-dark')
    }
    applyTheme()
  }

  changeContrast() {
    const theme = getTheme()
    if (theme === 'dark') {
      setTheme('high-contrast-dark')
    }
    else if (theme === 'light') {
      setTheme('high-contrast')
    }
    else if (theme === 'high-contrast-dark') {
      setTheme('dark')
    }
    else if (theme === 'high-contrast') {
      setTheme('light')
    }
  }
}
</script>

<template>
  <div class="nav-bar">
    <div class="left">
      <a class="reset" href="/">RESET</a>
    </div>
    <div class="right">
      <Icon class="nav-icon" :icon="icon" v-on:click="changeColor"/>
      <Icon class="nav-icon" icon="tabler:contrast-filled" v-on:click="changeContrast"/>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/css/font';
@import '@/css/global';

.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 32px);
  height: 48px;
  padding: 0 16px;
  background-color: var(--button-background);
  border-bottom: 1px solid var(--button-border);

  .left {
    display: flex;
    align-items: center;
    justify-content: center;

    .reset {
      font-family: $font-family-mono;
      font-size: 24px;
      text-decoration: none;
      color: var(--text);
    }
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    .nav-icon {
      color: var(--text);
      width: 24px;
      height: 24px;
      border-radius: 12px;

      &:hover {
        background-color: var(--button-hover);
      }
    }
  }
}
</style>
