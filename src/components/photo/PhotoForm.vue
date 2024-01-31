<template>
  <div class="photo-form">
    <v-row class="d-flex">
      <v-text-field v-model="title"></v-text-field>
      <v-file-input v-model="img"></v-file-input>
      <v-btn @click="addPhoto">Add photo</v-btn>
    </v-row>
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

<style lang="scss" scoped></style>
