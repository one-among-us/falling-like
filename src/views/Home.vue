<script lang="ts">
import { Vue, Component } from 'vue-facing-decorator'
import homehtml from '@/assets/home.md'
import homehtml_zh_hans from '@/assets/home.zh_hans.md'
import homehtml_zh_hant from '@/assets/home.zh_hant.md'
import { initAnswers } from '@/logic/data'
import AnswerSheet from '@/components/AnswerSheet.vue'
import { getLang } from '@/logic/lang'

@Component({
  components: { AnswerSheet }
})
export default class Home extends Vue {
  html = (getLang() == 'en') ? homehtml : (getLang() == 'zh_hans' ? homehtml_zh_hans : homehtml_zh_hant)
  answers = initAnswers
}
</script>

<template>
  <div class="markdown" v-html="html"></div>
  <AnswerSheet :answers="answers" />
</template>

<style lang="scss">
@import '@/css/global';
</style>
