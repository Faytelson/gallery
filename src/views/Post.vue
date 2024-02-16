<template>
  <div class="post" v-if="getPost">
    <div class="post__title">{{ getPost.title }}</div>
    <div class="post__title">{{ getPost.description }}</div>
    <div class="post__img-container">
      <img :src="getPost.photo_url" alt="" class="post__image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  mounted() {
    this.fetchPost();
  },
  computed: {
    getPost() {
      return this.$store.getters.GET_POST;
    },
  },
  methods: {
    fetchPost() {
      this.$store.dispatch("fetchPost", this.$route.params.id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
