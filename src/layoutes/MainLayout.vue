<template>
  <div id="root">
    <div class="outer-wrapper">
      <div class="wrapper">
        <Sidebar/>
        <main class="main-page" id="main">
          <Header/>
          <router-view/>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/app/Sidebar";
import Header from "@/components/app/Header";

export default {
  name: "MainLayout",
  components: {
    Sidebar,
    Header
  }
}
</script>

<style scoped>

</style>