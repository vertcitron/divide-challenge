<template>
  <article id="division-runner">
    <div>
      {{ operation.numerator }} /
      {{ operation.divider }} =
      {{ operation.result }}
    </div>
    <GetReady v-if="mode === 'ready'" />
    <Started v-if="mode === 'started'" />
    <Finished v-if="mode === 'finished'" />
  </article>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { generateDivision, Division } from '@/utils/generateDivision'

export default defineComponent({
  name: 'DivisionRunner',
  setup: () => {
    const operation = ref<Division>(generateDivision())
    return { operation }
  }
})
</script>
