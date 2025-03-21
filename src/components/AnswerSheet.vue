<script lang="ts">
import { Vue, Component, Prop } from 'vue-facing-decorator'
import { Answer } from '@/logic/data'
import router from '@/router'
import { getLang } from '@/logic/lang'
import { getResponseSync } from '@/logic/helper'
import { zh_hans_strings, zh_hant_strings } from '@/logic/config'

@Component({})
export default class AnswerSheet extends Vue {
  @Prop({ required: true }) answers: Answer[]

  change(id: string) {
    router.push({ path: `/qs/${id}` })
  }

  getAnswerString(u: Answer) {
    if (getLang() == 'en') return u.answer;
    if (getLang() == 'zh_hant') {
      const strs = JSON.parse(getResponseSync(zh_hant_strings));
      if (!strs[u.id]) return u.answer;
      return strs[u.id];
    }
    if (getLang() == 'zh_hans') {
      const strs = JSON.parse(getResponseSync(zh_hans_strings));
      if (!strs[u.id]) return u.answer;
      return strs[u.id];
    }
  }
}
</script>

<template>
  <div class="answer-sheet">
    <a class="answer-item" v-for="u of answers" :key="u.jump" :href="null" @click="change(u.jump)">
      <p>{{ getAnswerString(u) }}</p>
    </a>
  </div>
</template>

<style lang="scss">
@import '@/css/global';
@import '@/css/variables';

.answer-sheet {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% - 40px);
  height: min-content;
  max-width: $max-width;
  padding: 20px;
  gap: 1em;

  .answer-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 48px;
    background: var(--button-background);
    outline: none;
    border-radius: 16px;
    text-decoration: none;
    color: var(--text);
    border: 2px solid var(--button-border);

    &:hover {
      background: var(--button-hover);
    }

    p {
      margin: auto;
      text-align: center;
      color: var(--text);
      font-size: 1.2rem;
    }
  }
}
</style>
