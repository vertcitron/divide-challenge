<template>
  <Header />
  <DivisionRunner />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
import DivisionRunner from './components/DivisionRunner.vue'

export default defineComponent({
  name: 'App',
  components: { Header, DivisionRunner }
})
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  max-width: 40rem
  margin: 60px auto 0

button
  padding: 0 2rem
  border: none
  background-color: lightgreen
  border-radius: 0.25rem
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25)
  font-weight: bold
</style>
