<template>
  <swiper
    :modules="modules"
    :pagination="{
      clickable: true,
      dynamicBullets: false,
    }"
    :class="'main-slider'"
    :loop="true"
  >
    <swiper-slide v-for="i in 5" :key="i">
      <div class="main-banner">
        <div class="main-banner__clip">
          <div class="main-banner__background"></div>
        </div>
        <img
          src="@/assets/images/restik1.png"
          alt=""
          class="main-banner__img"
        />
        <p class="main-banner__p">
          -30% <span class="main-banner__span">или больше</span>
        </p>
        <button class="main-banner__btn">Смотреть</button>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

let modules = ref([Pagination]);
</script>
