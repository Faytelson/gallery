import Vue from "vue";
import Vuex from "vuex";
import { photos } from "./modules/photos";
import { mainPage } from "./modules/mainPage";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    photos,
    mainPage,
  },
  state: {
    preloader: 0,
  },
  getters: {
    GET_PRELOADER(state) {
      return state.preloader;
    },
  },
  mutations: {
    PRELOADER_INC(state) {
      state.preloader++;
    },
    PRELOADER_DECR(state) {
      setTimeout(() => {
        state.preloader--;
      }, 500);
    },
  },
});
