<template>
  
  <MainCount />
  <Counter />

</template>

<script>
import MainCount from './components/MainCount.vue'
import Counter from './components/Counter.vue'

export default {
  name: 'App',
  components: {
    MainCount,
    Counter
  }
}
</script>
<style src="./assets/tailwind.css"/>


