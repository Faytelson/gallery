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
      axios
        .get(`https://api.slingacademy.com/v1/sample-data/photos/?offset=${offset}&limit=${limit}`)
        .then((res) => {
          context.commit("SET_PHOTOS", res.data.photos);
          context.commit("SET_TOTAL_PICTURES", res.data.total_photos);
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
    sendPhotos(context, photo) {
      fetch("https://api.slingacademy.com/v1/sample-data/photos", {
        method: "PUT",
        body: JSON.stringify(photo),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err) => console.log(err));
    },
  },
};
