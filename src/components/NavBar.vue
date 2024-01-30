<template>
  <v-container fluid>
    <v-app-bar color="blue lighten-3">
      <v-spacer></v-spacer>
      <v-btn plain x-large class="mr-3">
        <router-link :to="{ name: 'home' }">Главная</router-link>
      </v-btn>
      <v-btn plain x-large class="mr-3">
        <router-link :to="{ name: 'gallery', params: { 'page': 1} }">Галерея</router-link>
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped></style>
