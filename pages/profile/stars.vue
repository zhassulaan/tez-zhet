<template>
  <div class="container">
    <header class="header mb-10">
      <button @click="router.go(-1)">
        <icon-chevron class="rotate-90" />
      </button>
      <h2 class="header-absolute">Мои оценки</h2>
    </header>
    <section class="story">
      <div class="story-block" v-for="i in 3" :key="i">
        <div class="story-block__border">
          <p class="story-block__number">Номер заказа №777</p>
          <p class="story-block__p mt-10">28.04.2023</p>
        </div>
        <div class="story-block__one">
          <img
            src="@/assets/images/Aldick.jpg"
            alt=""
            class="story-block__img"
          />
          <div class="story-block__right">
            <p class="story-block__name">Пахлава</p>
            <p class="story-block__price">850, 00 ₸</p>
            <p class="story-block__text">
              7 мини-пирожных из песочной крошки, вареной сгущенки и грецких
              орехов
            </p>
          </div>
        </div>
        <div class="story-block__one">
          <img
            src="@/assets/images/Aldick.jpg"
            alt=""
            class="story-block__img"
          />
          <div class="story-block__right">
            <p class="story-block__name">Пахлава</p>
            <p class="story-block__price">850, 00 ₸</p>
            <p class="story-block__text">
              7 мини-пирожных из песочной крошки, вареной сгущенки и грецких
              орехов
            </p>
          </div>
        </div>
        <div class="stars-block">
          <div class="stars-block__left__flex">
            <div class="stars-block__left">
              <img
                src="@/assets/images/Marmaris.png"
                alt=""
                class="stars-block__img"
              />
            </div>
            <p class="stars-block__text">Мармарис турецкое кафе</p>
          </div>
          <div class="stars-block__stars">
            <IconSmallStar
              v-for="i in 5"
              :key="i"
              :class="i <= 3 ? 'active__star' : ''"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const router = useRouter();
</script>
