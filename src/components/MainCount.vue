<template>
  <div>
    <h1 class="text-center font-bold text-3xl mt-2">Hello World</h1>
  </div>
</template>

<script>
export default {
  name: 'MainCount',
  mounted(name){
    alert('Just Mounted' + name)
  }
}
</script>

