<template>
  <div class="gallery">
    <div class="gallery__container">
      <div class="gallery__form">
        <PhotoFormVue @addPhoto="addPhoto"></PhotoFormVue>
      </div>
      <div class="gallery__items" align="stretch" v-if="getPhotos">
        <PhotoCardVue v-for="photo in getPhotos" :key="photo.id" :photo="photo" @openDialogPhoto="openDialogPhoto"></PhotoCardVue>
      </div>
      <PhotoDialog :photo="currentDialogPhoto" v-model="isDialog"></PhotoDialog>
      <div class="gallery__pagination text-center">
        <v-pagination v-model="currentPage" @input="changeRoute" :length="getPaginationLength" prev-icon="mdi-menu-left" next-icon="mdi-menu-right"></v-pagination>
      </div>
    </div>
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
    perPage: 9,
  }),
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
      if (this.$route.params.page) {
        this.currentPage = +this.$route.params.page;
      }
    },
    changeRoute() {
      this.fetchPhotos();
      this.$router.push({ name: "gallery", params: { page: this.currentPage } });
    },
  },
  computed: {
    getPhotos() {
      return this.$store.getters.GET_PHOTOS;
    },
    setFetchParams() {
      return {
        offset: (this.currentPage - 1) * this.perPage,
        limit: this.perPage,
      };
    },
    getPaginationLength() {
      let total = this.$store.getters.GET_TOTAL_PICTURES;
      return Math.ceil(total / this.perPage);
    },
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  padding-top: 40px;
  padding-bottom: 120px;

  &__container {
    @include container;
  }

  &__form {
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    position: relative;

    ::v-deep .v-file-input .v-input__control {
      @include invisible;
    }
  }

  &__items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 40px;
    margin-bottom: 60px;
  }

  &__pagination {
    ::v-deep .v-pagination__item--active {
      background-color: $color-grey-10 !important;
      color: $color-black !important;
    }
  }
}
</style>
