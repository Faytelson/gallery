<template>
  <div class="gallery">
    <v-container>
      <PhotoFormVue @addPhoto="addPhoto"></PhotoFormVue>
      <v-row align="stretch" v-if="getPhotos">
        <PhotoCardVue v-for="photo in getPhotos" :key="photo.id" :photo="photo" @openDialogPhoto="openDialogPhoto"></PhotoCardVue>
      </v-row>
      <PhotoDialog :photo="currentDialogPhoto" v-model="isDialog"></PhotoDialog>
      <div class="text-center">
        <v-pagination v-model="currentPage" :length="getPaginationLength" prev-icon="mdi-menu-left" next-icon="mdi-menu-right"></v-pagination>
      </div>
    </v-container>
  </div>
</template>

<script>
import PhotoCardVue from "@/components/photo/PhotoCard.vue";
import PhotoFormVue from "@/components/photo/PhotoForm.vue";
import PhotoDialog from "@/components/photo/PhotoDialog.vue";

export default {
  name: "Gallery",
  components: {
    PhotoCardVue,
    PhotoFormVue,
    PhotoDialog,
  },
  mounted() {
    this.getQueryParams();
    this.fetchPhotos();
  },
  data: () => ({
    currentDialogPhoto: {},
    isDialog: false,
    currentPage: 1,
    perPage: 12,
  }),
  watch: {
    currentPage(newCurrentPage) {
      this.currentPage = newCurrentPage;
      this.fetchPhotos();
      this.$router.push({ name: "gallery", params: { page: this.currentPage } });
    },
    // '$route'(newRoute) {

    // }
  },
  methods: {
    fetchPhotos() {
      this.$store.dispatch("fetchPhotos", [this.setFetchParams.offset, this.setFetchParams.limit]);
    },
    addPhoto(photo) {
      this.$store.dispatch("sendPhotos", photo);
    },
    openDialogPhoto(photo) {
      this.currentDialogPhoto = photo;
      this.isDialog = true;
    },
    getQueryParams() {
      this.currentPage = this.$router.params.page;
    },
  },
  computed: {
    getPhotos() {
      return this.$store.getters.GET_PHOTOS;
    },
    setFetchParams() {
      let offset = (this.currentPage - 1) * this.perPage;
      let limit = offset + this.perPage;
      return {
        limit,
        offset,
      };
    },
    getPaginationLength() {
      let total = this.$store.getters.GET_TOTAL_PICTURES;
      return Math.ceil(total / this.perPage);
    },
  },
};
</script>

<style lang="scss" scoped></style>
