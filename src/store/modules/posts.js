import Vue from "vue";
import axiosInstance from "@/api/api";
import { routes } from "@/api/apiRoutes";

export const posts = {
  state: {
    posts: null,
    totalPosts: null,
    post: null,
    categories: {
      love: "#ff00ff",
      math: "#0000ff",
      gaming: "#006600",
      programming: "#5500ff",
    },
  },
  getters: {
    GET_POSTS(state) {
      return state.posts;
    },
    GET_TOTAL_POSTS(state) {
      return state.totalPosts;
    },
    GET_POST(state) {
      return state.post;
    },
    GET_CATEGORIES(state) {
      return state.categories;
    },
  },
  mutations: {
    SET_POSTS(state, payload) {
      state.posts = payload;
    },
    SET_TOTAL_POSTS(state, payload) {
      state.totalPosts = payload;
    },
    SET_POST(state, payload) {
      state.post = payload;
    },
  },
  actions: {
    fetchPosts(context, args) {
      const [offset, limit] = args;
      context.commit("PRELOADER_INC", null, { root: true });
      axiosInstance
        .get(routes.GET_POSTS(offset, limit))
        .then((response) => {
          context.commit("SET_POSTS", response.data.blogs);
          context.commit("SET_TOTAL_POSTS", response.data.total_blogs);
          if (response.data.blogs.length <= 0) {
            Vue.$toast.error("Постов не найдено");
          }
        })
        .catch(() => {
          Vue.$toast.error("Не удалось загрузить посты");
        })
        .finally(() => {
          context.commit("PRELOADER_DECR", null, { root: true });
        });
    },
    fetchPost(context, id) {
      context.commit("PRELOADER_INC", null, { root: true });
      axiosInstance
        .get(routes.GET_POST(id))
        .then((res) => {
          context.commit("SET_POST", res.data.blog);
          if (res.data.blog.length <= 0) {
            Vue.$toast.error("Пост не найден");
          }
        })
        .catch(() => {
          Vue.$toast.error("Не удалось загрузить пост");
        })
        .finally(() => {
          context.commit("PRELOADER_DECR", null, { root: true });
        });
    },
  },
};
