<template>
  <div id="app">
    <v-app>
      <div class="app__nav">
        <NavBar></NavBar>
      </div>
      <div class="app__content">
        <router-view></router-view>
      </div>
      <div class="app__preloader">
        <Preloader></Preloader>
      </div>
    </v-app>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Preloader from "./components/Preloader.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Preloader,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.app {
  &__preloader {

  }
}
</style>
