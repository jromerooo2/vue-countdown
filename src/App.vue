<template>
  
  <MainCount />
  <Counter />
  <ClockAlarm />


</template>

<script>
import MainCount from './components/MainCount.vue'
import Counter from './components/Counter.vue'
import ClockAlarm from './components/ClockAlarm.vue'

export default {
  name: 'App',
  components: {
    MainCount,
    Counter,
    ClockAlarm
  }
}
</script>
<style src="./assets/tailwind.css"/>


