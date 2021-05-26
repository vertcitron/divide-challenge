<template>
  <article id="division-runner">
    <GetReady v-if="mode === 'ready'" @goClick="goClicked" />
    <Started v-if="mode === 'started'" :operation="operation" @finished="finish"/>
    <SessionResults :scores="sessionScores" />
  </article>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from 'vue'
import GetReady from '@/components/GetReady.vue'
import Started, { FinishPayload } from '@/components/Started.vue'
import SessionResults from '@/components/SessionResults.vue'
import { generateDivision, Division } from '@/utils/generateDivision'

export default defineComponent({
  name: 'DivisionRunner',
  components: { GetReady, Started, SessionResults },
  setup: () => {
    const operation = ref(generateDivision())
    const mode = ref('ready')
    const sessionScores = reactive([] as FinishPayload[])

    const goClicked = () => {
      mode.value = 'started'
    }

    const finish = (payload: FinishPayload) => {
      mode.value = 'ready'
      sessionScores.push({ ...payload })
      operation.value = generateDivision()
    }

    return { operation, mode, goClicked, finish, sessionScores }
  }
})
</script>
