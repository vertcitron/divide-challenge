<template>
  <header id="header">
    <h1>{{ appTitle }}</h1>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Header',
  setup: () => {
    const appTitle = ref('Le « Divide Challenge »')
    document.title = appTitle.value
    return { appTitle }
  }
})
</script>

<style lang="sass">
  #header
    margin-bottom: 2rem
</style>
