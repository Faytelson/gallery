import Vue from "vue";
import Vuex from "vuex";
import { photos } from "./modules/photos";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    photos,
  },
});
