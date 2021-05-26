<template>
  <article id="division-runner">
    <GetReady v-if="mode === 'ready'" @goClick="goClicked" />
    <Started v-if="mode === 'started'" :operation="operation" @finished="finish"/>
  </article>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import GetReady from '@/components/GetReady.vue'
import Started, { FinishPayload } from '@/components/Started.vue'
import { generateDivision, Division } from '@/utils/generateDivision'

export default defineComponent({
  name: 'DivisionRunner',
  components: { GetReady, Started },
  setup: () => {
    const operation = ref<Division>(generateDivision())
    const mode = ref('ready')

    const goClicked = () => {
      mode.value = 'started'
    }

    const finish = (payload: FinishPayload) => {
      mode.value = 'ready'
      console.log(payload)
    }

    return { operation, mode, goClicked, finish }
  }
})
</script>
