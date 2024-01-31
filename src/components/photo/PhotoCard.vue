<template>
  <div @click="openDialogPhoto" class="photo-card">
    <v-card height="100%" class="photo-card__inner d-flex flex-column justify-space-between">
      <v-card-title class="photo-card__title">{{ photo.title }}</v-card-title>
      <v-card width="100%" height="500">
        <img :src="photo.url" class="photo-card__img" />
      </v-card>
    </v-card>
  </div>
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

  &__title {
    font-size: 18px;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
