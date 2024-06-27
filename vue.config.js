const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  // publicPath: process.env.NODE_ENV === "production" ? "/gallery-blog/" : "/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/styles/global.scss";`,
      },
    },
  },
  transpileDependencies: ["vuetify"],
});
