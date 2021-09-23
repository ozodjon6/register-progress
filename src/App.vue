<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import MainLayout from "@/layoutes/MainLayout";
import EmptyLayout from "@/layoutes/EmptyLayout";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout';
    }
  },
  components: {
    MainLayout,
    EmptyLayout
  },

}
</script>

<style lang="scss">
@import "assets/bootstrap-grid.min.css";
@import "assets/bootstrap.min.css";
@import "~element-ui/lib/theme-chalk/index.css";
@import "assets/auth-main.css";
@import "assets/style.css";

</style>
