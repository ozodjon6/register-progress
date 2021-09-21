<template>
  <div id="root">
    <div class="wrapper">
      <Sidebar @isOpenMenu="isOpen = !isOpen"
                v-model="isOpen"/>
      <main class="main-page" id="main">
        <Header @isOpenMenu="isOpen = !isOpen"/>
        <router-view/>
      </main>
      <Footer v-if="$route.meta.layout" />
    </div>
    <Overlay
             @removeClassOpen="isOpen = !isOpen"
             v-model="isOpen"
              />
  </div>
</template>

<script>
import Sidebar from "@/components/app/Sidebar";
import Header from "@/components/app/Header";
import Footer from "@/components/app/Footer";
import Overlay from "@/components/app/Overlay";

export default {
  name: "MainLayout",
  components: {
    Footer,
    Sidebar,
    Header,
    Overlay
  },
  data: () => ({
    isOpen: false
  })
}
</script>

<style scoped>

</style>