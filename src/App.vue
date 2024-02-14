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
      <div class="app__button-scroll-top" v-show="isButtonScrollTop">
        <ButtonMain styleType="scroll-top" @clickBtn="scrollToTop"></ButtonMain>
      </div>
    </v-app>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Preloader from "./components/Preloader.vue";
import ButtonMain from "./components/ui/ButtonMain.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Preloader,
    ButtonMain,
  },
  created() {
    window.onscroll = () => {
      this.checkScroll();
    };
  },
  data() {
    return {
      isButtonScrollTop: false,
    };
  },
  methods: {
    checkScroll() {
      this.isButtonScrollTop = document.documentElement.scrollTop >= 500;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss">
.app {
  &__button-scroll-top {
    position: fixed;
    bottom: 40px;
    right: 20px;
  }
}
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
