<script lang="ts">
import { Vue, Component, Prop } from 'vue-facing-decorator'
import AnswerSheet from '@/components/AnswerSheet.vue'
import { Answer, QuestionList } from '@/logic/data'

@Component({
  components: {AnswerSheet},
})
export default class Qs extends Vue {
  @Prop({ required: true }) id: string;

  questions = null as never as QuestionList
  question = ""
  answers = [] as Answer[]

  created() {
    fetch('https://raw.githubusercontent.com/one-among-us/fell-like-data/refs/heads/master/questions.json')
      .then(it => it.text())
      .then(it => {
        this.questions = JSON.parse(it) as QuestionList;
        for (const v of this.questions.questions) {
          if (v.id === this.id) {
            this.question = v.question
            this.answers = v.answers
          }
        }
      })
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
