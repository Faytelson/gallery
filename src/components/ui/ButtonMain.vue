<template>
  <button class="button" :class="getClasses" @click="emitClick"></button>
</template>

<script>
export default {
  name: "ButtonMain",
  props: {
    title: String,
    styleType: String,
  },
  computed: {
    getClasses() {
      let classes = [];
      if (this.styleType) {
        classes.push(`button_${this.styleType}`);
      }
      return classes;
    },
  },
  methods: {
    emitClick() {
      this.$emit("clickBtn");
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  &_scroll-top {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: url("@/assets/images/icon_scroll-top.webp") center/contain no-repeat;
  }
}
</style>
