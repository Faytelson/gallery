<template>
  <div class="title" :class="classes">{{ title }}</div>
</template>

<script>
export default {
  name: "Title",
  props: {
    styleTypes: Array,
    title: String,
  },
  computed: {
    classes() {
      let classes = [];
      if (this.styleTypes.length > 0) {
        this.styleTypes.forEach((type) => {
          classes.push(`title_${type}`);
        });
      }
      return classes;
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  &_main {
    font-family: $font-main !important;
    font-size: 48px !important;
    font-weight: 700 !important;
  }

  &_md {
    font-family: $font-main !important;
    font-size: 32px !important;
    font-weight: 700 !important;
  }
}
</style>
