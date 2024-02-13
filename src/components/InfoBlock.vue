<template>
  <div class="info-block">
    <div class="info-block__photos">
      <div class="info-block__photo-container info-block__photo-container_1" :class="`info-block__photo-container_${index+1}`" v-for="(image, index) in info.imageSources" :key="image.src">
        <img :src="require(`@/assets/images/${image.src}`)" :alt="image.alt" loading="lazy" class="info-block__img"/>
      </div>
    </div>
    <h2 class="info-block__title">
      <Title :title=info.title :styleTypes="['md']"></Title>
    </h2>
    <div class="info-block__text" v-html="info.text">
    </div>
  </div>
</template>

<script>
import Title from "./ui/Title.vue";

export default {
  name: "InfoBlock",
  props: {
    info: Object,
  },
  components: {
    Title,
  },
};
</script>

<style lang="scss" scoped>
.info-block {
  &__photos {
    width: 100%;
    display: grid;
    grid-template-areas:
      "a a a a"
      "b b c c";
    gap: 15px;
    margin-bottom: 30px;
  }

  &__photo-container {
    width: 100%;
    border-radius: 4px;
    overflow: hidden;

    &_1 {
      height: 200px;
      grid-area: a;
    }

    &_2 {
      height: 400px;
      grid-area: b;
    }

    &_3 {
      height: 400px;
      grid-area: c;
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__title {
    margin-bottom: 20px;
  }
}
</style>
