<template>
  <v-dialog class="dialog" v-model="isDialog" width="700px">
    <v-card class="dialog__card px-12">
      <v-card-title class="dialog__title px-0">{{ getPhotoTitle }}</v-card-title>
      <v-card-text class="px-0">{{ photo.description }}</v-card-text>
      <v-btn :href="photo.url" target="_blank" class="mb-6"> Ссылка на картинку </v-btn>
      <v-card-text class="px-0">
        <v-img :src="photo.url" width="600" height="600"></v-img>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    photo: {
      type: Object,
      required: true,
    },
    value: {
      type: Boolean,
    },
  },
  created() {
    this.isDialog = this.value;
  },
  watch: {
    value(newValue) {
      this.isDialog = newValue;
    },
    isDialog(newValue) {
      this.$emit("input", newValue);
    },
  },
  data: () => ({
    isDialog: false,
  }),
  computed: {
    getPhotoTitle() {
      return `Название фоторгафии: ${this.photo.title}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.dialog {
    &__title {
        word-break: keep-all;
    }
}
</style>
