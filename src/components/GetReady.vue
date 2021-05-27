<template>
  <div class="getready">
    <div>Clique pour démarrer la prochaine opération</div>
    <button ref="goButton" @click="goClick">GO</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, Ref } from 'vue'

export default defineComponent({
  name: 'GetReady',
  emits: ['goClick'],
  setup: (props, { emit }) => {
    const goClick = () => emit('goClick')
    const goButton: Ref<HTMLInputElement | null> = ref(null)

    onMounted(() => {
      // eslint-disable-next-line no-unused-expressions
      goButton.value?.focus()
    })

    return { goClick, goButton }
  }
})
</script>

<style lang="sass">
.getready
  display: flex
  flex-direction: row
  justify-content: center
  width: 100%

  button
    margin-left: 5rem
</style>
