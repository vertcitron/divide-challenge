<template>
  <section id="allresults">
    <h4>résultats précédents</h4>
    <div class="score" v-for="(score, index) in scores" :key="index">
      <div class="score__date">
        {{ new Date(score.date).toLocaleString('fr-FR', dateOptions) }}
      </div>
      <div class="score__points">
        {{ score.score }} secondes
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, Ref, watch } from 'vue'
import { FinishPayload } from '@/components/Started.vue'

interface Score {
  date: Date
  score: number
}

export default defineComponent({
  name: 'AllResult',
  props: {
    session: { type: Array as PropType<FinishPayload[]>, required: true }
  },
  setup: (props) => {
    const persisted: string | null = localStorage.getItem('scores')
    const scores: Ref<Score[]> = ref(persisted ? JSON.parse(persisted) as Score[] : new Array<Score>())
    const dateOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }

    watch(props.session, () => {
      if (props.session.length === 10) {
        const score = props.session.map((item) => item.score).reduce((a, b) => a + b, 0)
        scores.value.push({ date: new Date(), score })
        localStorage.setItem('scores', JSON.stringify(scores.value))
      }
    })

    return { scores, dateOptions }
  }
})
</script>

<style lang="sass">
.score
  width: 30rem
  margin: 0 auto
  display: grid
  grid-template-columns: 1fr 1fr
  font-style: italic

  &__date
    text-align: left

  &__points
    text-align: right
</style>
