<script lang="ts">
import { Vue, Component, Prop } from 'vue-facing-decorator'
import { Answer } from '@/logic/data'

@Component({})
export default class AnswerSheet extends Vue {
  @Prop({ required: true }) answers: Answer[]
}
</script>

<template>
  <div class="answer-sheet">
    <a class="answer-item" v-for="u of answers" :key="u.jump" v-bind:href="'/qs/' + u.jump">
      <p>{{ u.answer }}</p>
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
  width: 100%;
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
    border: none;
    outline: none;
    border-radius: 16px;
    text-decoration: none;
    color: var(--text);

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
