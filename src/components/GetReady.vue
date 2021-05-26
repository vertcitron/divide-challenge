<template>
  <div class="getready">
    <div>Clique pour démarrer la prochaine opération</div>
    <button @click="goClick">GO</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GetReady',
  emits: ['goClick'],
  setup: (props, { emit }) => {
    const goClick = () => emit('goClick')
    return { goClick }
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
