import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { router } from "./router/router";
import axios from "axios";
import { store } from "./store";
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.config.productionTip = false;
Vue.prototype.axios = axios;
Vue.use(Toast, {
  position: POSITION.BOTTOM_RIGHT,
  timeout: 3000,
  pauseOnHover: true,
});

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
