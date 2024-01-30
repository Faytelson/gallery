<template>
  <v-col cols="4" @click="openDialogPhoto">
    <v-card height="100%" class="photo-card d-flex flex-column justify-space-between">
      <v-card-title>{{ photo.title }}</v-card-title>
      <v-card width="100%" height="500">
        <img :src="photo.url" class="photo-card__img" />
      </v-card>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    photo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    openDialogPhoto() {
      this.$emit("openDialogPhoto", this.photo);
    },
  },
};
</script>

<style lang="scss" scoped>
.photo-card {
  cursor: pointer;

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
