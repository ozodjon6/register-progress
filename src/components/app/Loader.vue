<template>
  <div>
    <div class="loader">
      <svg class="cancel-upload__spinner spinner">
        <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" class="spinner__txt"></text>
        <circle cx="30" cy="30" r="28" class="spinner__circle" id="circle"></circle>
      </svg>
    </div>
    <div class="overlay-white"></div>
  </div>
</template>

<script>
export default {
  name: "Loader"
}
</script>

<style scoped>

</style>