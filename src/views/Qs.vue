<script lang="ts">
import { Vue, Component, Prop } from 'vue-facing-decorator'
import AnswerSheet from '@/components/AnswerSheet.vue'
import { Answer, QuestionList } from '@/logic/data'
import { data_uri, zh_hans_strings, zh_hant_strings } from '@/logic/config'
import { getLang } from '@/logic/lang'
import { getResponseSync } from '@/logic/helper'

@Component({
  components: {AnswerSheet},
})
export default class Qs extends Vue {
  @Prop({ required: true }) id: string;

  questions = null as never as QuestionList
  question = ""
  description = ""
  answers = [] as Answer[]

  created() {
    fetch(data_uri)
      .then(it => it.text())
      .then(it => {
        this.questions = JSON.parse(it) as QuestionList;
        for (const v of this.questions.questions) {
          if (v.id === this.id) {
            this.answers = v.answers
            if (getLang() == 'en') {
              this.question = v.question
              if (v.description) this.description = v.description
            }
            else {
              if (getLang() == 'zh_hant') {
                const strs = JSON.parse(getResponseSync(zh_hant_strings));
                if (!strs[v.id]) this.question = v.question;
                else this.question = strs[v.id];
                if (strs['alt_' + v.id]) this.description = strs['alt_' + v.id];
              }
              else {
                const strs = JSON.parse(getResponseSync(zh_hans_strings));
                if (!strs[v.id]) this.question = v.question;
                else this.question = strs[v.id];
                if (strs['alt_' + v.id]) this.description = strs['alt_' + v.id];
              }
            }
          }
        }
      })
  }
}
</script>

<template>
  <h2 class="question" v-text="question"></h2>
  <div class="alt" v-if="description" v-html="description"/>
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

.alt {
  font-size: 1.1rem;
}
</style>
