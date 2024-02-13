<template>
  <div id="app">
    <v-app>
      <div class="app__nav">
        <NavBar></NavBar>
      </div>
      <div class="app__content">
        <transition name="fade">
          <router-view></router-view>
        </transition>
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
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s linear;
}
.fade-enter-to {
  opacity: 1;
}
</style>
