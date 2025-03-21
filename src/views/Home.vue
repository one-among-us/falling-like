<script lang="ts">
import { Vue, Component } from 'vue-facing-decorator'
import homehtml from '@/assets/home.md'
import { initAnswers } from '@/logic/data'
import AnswerSheet from '@/components/AnswerSheet.vue'

@Component({
  components: { AnswerSheet }
})
export default class Home extends Vue {
  html = homehtml
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
