<script lang="ts">
import { Vue, Component } from 'vue-facing-decorator'

@Component({})
export default class Bottom extends Vue {

}
</script>

<template>
  <div class="bottom">
    <img src="https://raw.githubusercontent.com/one-among-us/oauts-artwork/refs/heads/main/icon/org/5-uwu.png" class="leaf"/>
    <div class="bottom-content markdown">
      <p>Remake from <a href="https://youfeellikeshit.com">https://youfeellikeshit.com</a></p>
      <p>Completed by <a href="https://github.com/LS-KR">𝓔𝓵𝓲𝓱𝓾𝓼𝓸 𝓠𝓾𝓲𝓰𝓵𝓮𝔂</a> from <a href="https://oneamongus.ca">One Among Us</a> with love ❤️</p>
      <p>Translated by <a href="https://t.me/ntspkts">natsupockets</a></p>
      <p>Thanks <a href="http://amandamiklik.com">Amanda Miklik</a> and <a href="https://jaceharr.com/about/">Jace Harr</a>; thanks for all your contribution.</p>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/css/global';
@import '@/css/markdown';
@import '@/css/variables';

.bottom {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: $max-width;
  height: fit-content;

  .leaf {
    max-width: 120px;
    max-height: 120px;
    width: 20%;
    height: auto;
    object-fit: cover;
    display: block;
  }

  .bottom-content {
    display: block;
    text-wrap: stable;
  }

  p {
    line-height: 1.2;
  }
}
</style>
