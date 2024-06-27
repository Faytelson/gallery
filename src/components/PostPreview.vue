<template>
  <div class="post-preview">
    <div class="post-preview__title">{{ post.title }}</div>
    <div class="post-preview__image-container">
      <img :src="post.photo_url" alt="" class="post-preview__image" />
    </div>
    <div class="post-preview__info">
      <p class="post-preview__info-row">
        <span class="post-preview__info-title">Создан: </span>
        <span class="post-preview__info-content">{{ setFormattedDate(post.created_at) }}</span>
      </p>
      <p class="post-preview__info-row">
        <span class="post-preview__info-title">Обновлен: </span>
        <span class="post-preview__info-content">{{ setFormattedDate(post.updated_at) }}</span>
      </p>
      <p class="post-preview__info-row">
        <span class="post-preview__info-title">Категория: </span>
        <span 
        class="post-preview__info-content post-preview__info-content_category"
        :style="getCategoryStyle(getCategories, post.category)"
        >{{ post.category }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { dateMixin } from '@/mixins/dateMixin';
import { categoryStyleMixin } from '@/mixins/categoryStyleMixin';

export default {
  name: "PostPreview",
  props: {
    post: Object,
  },
  mixins: [dateMixin, categoryStyleMixin],
  computed: {
    getCategories() {
      return this.$store.getters.GET_CATEGORIES;
    },
  },
};
</script>

<style lang="scss" scoped>
.post-preview {
  width: 520px;

  &__image-container {
    max-width: 100%;
  }

  &__image {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  &__title {
    @include font($font-main, 22px, 500);
    color: $color-black;
    margin-bottom: 15px;
  }

  &__info-title {
    @include font($font-main, 16px, 700);
    color: $color-black;
  }

  &__info-content {
    @include font($font-main, 16px, 400);
    color: $color-black;

    &_category {
      font-weight: 500;
    }
  }
}
</style>
