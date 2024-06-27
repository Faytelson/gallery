<template>
  <div class="post" v-if="getPost">
    <div class="post__container">
      <div class="post__title">{{ getPost.title }}</div>
      <div class="post__description">{{ getPost.description }}</div>
      <div class="post__category">
        Category: <span class="post__category_name" :style="getCategoryStyle(getCategories, getPost.category)">{{ getPost.category }}</span>
      </div>
      <div class="post__img-container">
        <img :src="getPost.photo_url" alt="" class="post__image" />
      </div>
      <div class="post__content_text">{{ getPost.content_text }}</div>
      <div class="post__updated">{{ setFormattedDate(getPost.updated_at) }}</div>
    </div>
  </div>
</template>

<script>
import { dateMixin } from "@/mixins/dateMixin";
import { categoryStyleMixin } from "@/mixins/categoryStyleMixin";

export default {
  name: "Post",
  mixins: [dateMixin, categoryStyleMixin],
  mounted() {
    this.fetchPost();
  },
  computed: {
    getPost() {
      return this.$store.getters.GET_POST;
    },
    getCategories() {
      return this.$store.getters.GET_CATEGORIES;
    },
  },
  methods: {
    fetchPost() {
      this.$store.dispatch("fetchPost", this.$route.params.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.post {
  &__container {
    @include container;
    padding-top: 30px;
    padding-bottom: 100px;
  }

  &__title {
    @include font($font-main, 22px, 500);
    color: $color-black;
    margin-bottom: 15px;
  }

  &__description {
    @include font($font-main, 18px, 400);
    color: $color-black;
    margin-bottom: 15px;
  }

  &__content_text {
    @include font($font-main, 16px, 400);
    color: $color-black;
    margin-bottom: 15px;
  }

  &__img-container {
    float: left;
    margin: 0 20px 0 0;
  }

  &__updated,
  &__category {
    @include font($font-main, 18px, 400);
  }
}
</style>
