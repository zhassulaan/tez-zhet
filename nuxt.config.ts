// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Тезжет",
      charset: "utf-8",
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
      ],
    },
  },
  devtools: { enabled: false },
  modules: ["nuxt-swiper"],
  css: ["@/assets/sass/main.scss"],
});
