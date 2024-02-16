<template>
  <div class="blog">
    <div class="blog__container">
      <div class="blog__title">
        <Title title="Blog" :styleTypes="['main']"></Title>
      </div>
      <div class="blog__posts">
        <div class="blog__post" v-for="post in getPosts" :key="post.title">
          <router-link :to="{ name: 'post', params: { id: post.id } }">
            <PostPreview :post="post"></PostPreview>
          </router-link>
        </div>
        <div class="blog__pagination">
          <v-pagination v-model="currentPage" @input="changeRoute" :length="getPaginationLength" prev-icon="mdi-menu-left" next-icon="mdi-menu-right"></v-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/ui/Title.vue";
import PostPreview from "@/components/PostPreview.vue";

export default {
  Name: "Blog",
  components: {
    Title,
    PostPreview,
  },
  mounted() {
    this.setCurrentPage();
    this.fetchPosts();
  },
  data() {
    return {
      perPage: 9,
      currentPage: 1,
    };
  },
  computed: {
    getPosts() {
      return this.$store.getters.GET_POSTS;
    },
    getPaginationLength() {
      let total = this.$store.getters.GET_TOTAL_POSTS;
      return Math.ceil(total / this.perPage);
    },
    getFetchParams() {
      return {
        offset: this.currentPage * this.perPage,
        limit: this.perPage,
      };
    },
  },
  methods: {
    fetchPosts() {
      this.$store.dispatch("fetchPosts", [this.getFetchParams.offset, this.getFetchParams.limit]);
    },
    changeRoute() {
      this.fetchPosts();
      if (this.$route.params.page !== this.currentPage) {
        this.$router.push({ name: "blog", params: { page: this.currentPage } });
      }
    },
    setCurrentPage() {
      if (this.$route.params.page) {
        this.currentPage = +this.$route.params.page;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.blog {
  padding-top: 50px;
  padding-bottom: 100px;

  &__container {
    @include container;
  }

  &__title {
    margin-bottom: 40px;
  }

  &__posts {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    max-width: 100%;
  }
}
</style>
