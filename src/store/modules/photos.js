import Vue from "vue";
import axios from "axios";

export const photos = {
  state: {
    photos: null,
    totalPictures: null,
  },
  getters: {
    GET_PHOTOS(state) {
      return state.photos;
    },
    GET_TOTAL_PICTURES(state) {
      return state.totalPictures;
    },
  },
  mutations: {
    SET_PHOTOS(state, payload) {
      state.photos = payload;
    },
    SET_TOTAL_PICTURES(state, payload) {
      state.totalPictures = payload;
    },
  },
  actions: {
    fetchPhotos(context, args) {
      const [offset, limit] = args;
      context.commit("PRELOADER_INC", null, { root: true });
      axios
        .get(`https://api.slingacademy.com/v1/sample-data/photos/?offset=${offset}&limit=${limit}`)
        .then((response) => {
          context.commit("SET_PHOTOS", response.data.photos);
          context.commit("SET_TOTAL_PICTURES", response.data.total_photos);
          if (response.data.photos.length <= 0) {
            Vue.$toast.error("Изображений не найдено");
          }
        })
        .catch((err) => {
          Vue.$toast.error("Не удалось загрузить фотографии");
          console.log(err);
        })
        .finally(() => {
          context.commit("PRELOADER_DECR", null, { root: true });
        });
    },
    sendPhotos(context, photo) {
      context.commit("PRELOADER_INC", null, { root: true });
      fetch("https://api.slingacademy.com/v1/sample-data/photos", {
        method: "PUT",
        body: JSON.stringify(photo),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => {
          if (response.status === 405) {
            Vue.$toast.error("Нельзя добавить новые фото");
          }
        })
        .catch((err) => {
          Vue.$toast.error("Не удалось добавить фото");
          console.log(err);
        })
        .finally(() => {
          context.commit("PRELOADER_DECR", null, { root: true });
        });
    },
  },
};