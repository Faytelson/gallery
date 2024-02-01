<template>
  <div class="photo-form">
    <div class="photo-form__inner d-flex">
      <v-text-field v-model="title"></v-text-field>
      <v-file-input v-model="img"></v-file-input>
      <v-btn @click="addPhoto">Add photo</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotoForm",
  data: () => ({
    title: "",
    img: null,
  }),
  methods: {
    addPhoto() {
      const reader = new FileReader();
      reader.readAsDataURL(this.img);
      reader.onload = () => {
        let newPhoto = {
          id: Date.now(),
          title: this.title,
          url: reader.result,
        };
        this.$emit("addPhoto", newPhoto);
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.photo-form {
  &__inner {
    width: 100%;
    height: 100%;
    position: relative;
  }

  ::v-deep .v-text-field {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  ::v-deep .v-text-field__details {
    @include invisible;
  }

  ::v-deep .v-input__slot {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  ::v-deep .v-input__control {
    height: 100%;
  }

  ::v-deep .v-input--is-focused {
    color: $color-black !important;
  }
}
</style>
