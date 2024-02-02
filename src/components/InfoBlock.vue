<template>
  <div class="info-block">
    <div class="info-block__photos">
      <div class="info-block__photo-container info-block__photo-container_1">
        <img src="@/assets/images/img_background_main.webp" alt="Nature" class="info-block__img" />
      </div>
      <div class="info-block__photo-container info-block__photo-container_2">
        <img src="@/assets/images/img_background_sm_main_1.avif" alt="Nature" class="info-block__img" />
      </div>
      <div class="info-block__photo-container info-block__photo-container_3">
        <img src="@/assets/images/img_background_sm_main_2.webp" alt="Nature" class="info-block__img" />
      </div>
    </div>
    <h2 class="info-block__title">
      <Title title="Functions Of Arts" :styleTypes="['md']"></Title>
    </h2>
    <div class="info-block__text">
      <p>Art has had a great number of different functions throughout its history, making its purpose difficult to abstract or quantify to any single concept. This does not imply that the purpose of Art is "vague", but that it has had many unique, different reasons for being created.</p>

      <p>
        Art can have a personal function, it is an expression of basic human instinct for harmony, balance, rhythm. Art at this level is not an action or an object, but an internal appreciation of balance and harmony (beauty), and therefore an aspect of being human beyond utility. Art also provides
        a way to experience one's self in relation to the universe. This experience may often come unmotivated, as one appreciates art, music or poetry.
      </p>

      <p>
        On the other hand art may have a social function. At its simplest, art is a form of communication. It seeks to entertain and bring about a particular emotion or mood, for the purpose of relaxing or entertaining the viewer. Art may also be an expression of social protest, seeking to question
        aspects of society.
      </p>
    </div>
  </div>
</template>

<script>
import Title from "./ui/Title.vue";

export default {
  name: "InfoBlock",
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
      "a a"
      "b c";
    gap: 15px;
    margin-bottom: 30px;
  }

  &__photo-container {
    width: 100%;
    height: 400px;
    border-radius: 4px;
    overflow: hidden;

    &_1 {
      grid-area: a;
    }

    &_2 {
      grid-area: b;
    }

    &_3 {
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
