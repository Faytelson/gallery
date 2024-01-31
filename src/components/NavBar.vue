<template>
  <div class="navbar">
    <div class="navbar__container">
      <div class="navbar__inner">
        <router-link class="navbar__logo-container" :to="{ name: 'home' }">
          <img src="@/assets/images/logo.png" alt="" class="navbar__logo">
        </router-link>
        <div class="navbar__links">
          <router-link class="navbar__link" :to="{ name: 'home' }">Main</router-link>
          <router-link class="navbar__link" :to="{ name: 'gallery', params: { page: 1 } }">Gallery</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: $color-grey-10;
  height: 80px;

  &__container {
    @include container;
    height: 100%;
  }

  &__inner {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__links {
    display: flex;
    gap: 20px;
  }

  &__link {
    @include font($font-main, 16px, 700);
    color: $color-black;
    text-transform: uppercase;
    text-decoration: none;
  }
}
</style>
