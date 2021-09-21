<template>
  <div class="overlay" :class="{open: value}"
       @click.prevent="$emit('removeClassOpen')"
  ></div>
</template>

<script>
export default {
  name: "Overlay",
  props: ['value']
}
</script>

<style scoped>

</style>