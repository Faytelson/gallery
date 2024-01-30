<template>
  <div id="app">
    <v-app>
      <div class="app__nav">
        <NavBar></NavBar>
      </div>
      <div class="app__content">
        <router-view></router-view>
      </div>
    </v-app>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  data() {
    return {};
  },
};
</script>
