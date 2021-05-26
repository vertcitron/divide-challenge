<template>
  <section class="session">
    <h4>{{ title }}</h4>
    <div class="score" v-for="score in scores" :key="score.timestamp">
      <div class="score_operation">
        {{ operation(score.operation) }}
      </div>
      <div
        class="score_result"
        :class="score.success ? 'score_result--true' : 'score_result--false'"
      >
        {{ score.answer }}
      </div>
      <div class="score_points">
        {{ score.score }} s.
      </div>
    </div>
    <div class="session_sum">
      {{ scoreSum }}
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { FinishPayload } from '@/components/Started.vue'
import { Division } from '@/utils/generateDivision'

export default defineComponent({
  name: 'SessionResults',
  props: {
    scores: { type: Array as PropType<FinishPayload[]>, required: true }
  },
  computed: {
    length (): number {
      return this.scores.length
    },
    title (): string {
      return this.length > 0 ? `Résultats pour ${this.length} operation(s) :` : 'Aucune opération pour le moment'
    },
    scoreSum (): string {
      if (this.length === 0) return ''
      const sum = this.scores.map((item) => item.score).reduce((a, b) => a + b)
      return `TOTAL : ${sum} s.`
    }
  },
  methods: {
    operation (operation: Division): string {
      return `${operation.numerator} / ${operation.divider} = ${operation.result}`
    }
  }
})
</script>

<style lang="sass">
.session
  margin-top: 2rem

  h4
    font-style: italic

  .score
    margin: 0 auto
    width: 20rem
    display: grid
    grid-template-columns: 1fr 1fr 25%

    &_operation
      text-align: left

    &_result
      text-align: center

      &--true
        color: forestgreen
        font-weight: bold

      &--false
        color: red
        text-decoration: line-through

    &_points
      text-align: right
      font-weight: bold

  &_sum
    width: 20rem
    margin: 1rem auto
    text-align: right
    font-weight: bold
    font-size: 1.2rem
</style>
