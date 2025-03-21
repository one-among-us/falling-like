<script lang="ts">
import { Vue, Component, Prop } from 'vue-facing-decorator'
import AnswerSheet from '@/components/AnswerSheet.vue'
import questions from '@/data/example.json'
import { Answer } from '@/logic/data'

@Component({
  components: {AnswerSheet},
})
export default class Qs extends Vue {
  @Prop({ required: true }) id: string;

  question = ""
  answers = [] as Answer[]

  created() {
    for (const v of questions.questions) {
      if (v.id === this.id) {
        this.question = v.question
        this.answers = v.answers
      }
    }
  }
}
</script>

<template>
  <h2 class="question" v-text="question"></h2>
  <AnswerSheet :answers="answers"/>
</template>

<style scoped>
.question {
  display: block;
  font-size: 2rem;
  width: 100%;
  height: fit-content;
  text-align: center;
  text-wrap: wrap;
}
</style>
