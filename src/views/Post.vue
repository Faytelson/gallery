<template>
  <div class="post">{{ post.title }}</div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: Object,
  },
};
</script>

<style lang="scss" scoped></style>
