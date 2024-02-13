<template>
  <div class="home">
    <div class="home__container">
      <h1 class="home__title">
        <Title title="Visual Studio Art" :styleTypes="['main']"></Title>
      </h1>
      <transition-group tag="div" name="appear">
        <div class="home__info-block" v-for="block in getInfoBlocks" :key="block.title" ref="blocks">
          <InfoBlock :info="block"></InfoBlock>
        </div>
      </transition-group>
      <div class="home__btn-more-container">
        <button class="home__btn-more" v-if="!isLastBlock" @click="showNextBlock">More</button>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../components/ui/Title.vue";
import InfoBlock from "@/components/InfoBlock.vue";

export default {
  name: "Home",
  components: {
    Title,
    InfoBlock,
  },
  data: () => ({
    currentIndex: 0,
  }),
  computed: {
    getInfoBlocks() {
      return this.$store.getters.GET_INFO_BLOCKS.slice(0, this.currentIndex + 1);
    },
    isLastBlock() {
      return this.$store.getters.GET_INFO_BLOCKS.length === this.currentIndex + 1;
    },
  },
  methods: {
    showNextBlock() {
      this.currentIndex++;
    },
  },
  updated() {
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: "smooth",
    });
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

  &__info-block {
    margin-bottom: 50px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__btn-more-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__btn-more {
    @include font($font-main, 20px, 400);
    color: $color-black;
    background-color: $color-grey-10;
    padding: 10px 20px;
    width: 200px;
    border-radius: 4px;
    text-transform: uppercase;
    transition: color $transition-main, background-color $transition-main;

    &:hover {
      color: $color-white;
      background-color: $color-black;
    }
  }
}

.appear-enter-active,
.appear-enter-active {
  opacity: 0;
  transition: opacity 0.3s linear;
}

.appear-enter-to {
  opacity: 1;
}
</style>
