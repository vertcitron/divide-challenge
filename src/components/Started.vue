<template>
  <div class="running">
    <h2>Opération en cours :</h2>
    <div class="running-operation">{{operation.numerator}} / {{operation.divider}}</div>
    <div class="running-counter">
      {{ elapsed }} s.
    </div>
    <div class="running-result">
      <input type="text" v-model="result" placeholder="Entre un résultat ici pour arrêter le compteur..." @change="checkResult"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, onUnmounted, PropType } from 'vue'
import { Division } from '@/utils/generateDivision'

export interface FinishPayload {
  operation: Division
  answer: number
  success: boolean
  score: number
  timestamp: number
}

export default defineComponent({
  name: 'Started',
  props: {
    operation: { type: Object as PropType<Division>, required: true }
  },
  emits: ['finished'],
  setup: (props, { emit }) => {
    const start = Date.now()

    const result = ref('')
    const elapsed = ref(0)

    const timer = setInterval(() => {
      elapsed.value++
    }, 1000)

    const checkResult = () => {
      const success: boolean = Number(result.value) === props.operation.result
      const timestamp = Date.now()
      emit('finished', {
        operation: { ...props.operation },
        answer: Number(result.value),
        success,
        score: Math.round((Date.now() - start) / 1000) + (success ? 0 : 60),
        timestamp
      })
    }

    onUnmounted(() => {
      clearInterval(timer)
    })

    return { elapsed, result, checkResult }
  }
})
</script>

<style lang="sass">
.running
  &-operation
    font-size: 6rem
    font-weight: bold
    color: red

  &-counter
    font-size: 4rem
    font-weight: bold

  &-result
    margin-top: 2rem

    input
      width: 40rem
      font-size: 1.5rem
      text-align: center
      padding: 0.5rem
</style>
