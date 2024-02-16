<template>
  <div class="post-preview">
    my prewoijdscvhsdkvsdjk
    <div class="post-preview__title">{{ post.title }}</div>
    <div class="post-preview__image-container">
      <img :src="post.photo_url" alt="" class="post-preview__image" />
    </div>
    <div class="post-preview__info">
      <p class="post-preview__info-row">
        <span class="post-preview__info-title">Создан: </span>
        <span class="post-preview__info-content">{{ post.created_at }}</span>
      </p>
      <p class="post-preview__info-row">
        <span class="post-preview__info-title">Обновлен: </span>
        <span class="post-preview__info-content">{{ post.updated_at }}</span>
      </p>
      <p class="post-preview__info-row">
        <span class="post-preview__info-title">Категория: </span>
        <span class="post-preview__info-content post-preview__info-content_bold">{{ post.category }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostPreview",
  props: {
    post: Object,
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
}
</style>
