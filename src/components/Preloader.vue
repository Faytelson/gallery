<template>
  <div class="preloader" v-if="getPreloaderState">
    <div class="preloader__overlay"></div>
    <div class="preloader__progress-bar">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
  </div>
</template>

<script>
export default {
  name: "Preloader",
  computed: {
    getPreloaderState() {
      return this.$store.getters.GET_PRELOADER;
    },
  },
};
</script>

<style lang="scss" scoped>
.preloader {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;

  &__overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(128, 128, 128, 0.466);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  &__progress-bar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }
}
</style>
