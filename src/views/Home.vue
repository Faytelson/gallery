<template>
  <div class="home">
    <div class="home__container">
      <h1 class="home__title">
        <Title title="Visual Studio Art" :styleTypes="['main']"></Title>
      </h1>
      <div class="home__info-block">
        <InfoBlock></InfoBlock>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../components/ui/Title.vue";
import InfoBlock from '@/components/InfoBlock.vue';

export default {
  name: "Home",
  components: {
    Title,
    InfoBlock,
  },
};
</script>

<style lang="scss">
.home {
  padding-top: 50px;
  padding-bottom: 100px;

  &__container {
    @include container;
  }

  &__title {
    margin-bottom: 40px;
  }
}
</style>
