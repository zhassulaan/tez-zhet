<template>
  <div class="restaurants">
    <header class="restaurants-header">
      <div class="restaurants-header__flex">
        <button @click="$router.go(-1)" class="restaurants-header__btn">
          <icon-chevron class="rotate-90 -ml-2" />
        </button>
        <button class="restaurants-header__btn favourite_active">
          <icon-favourite />
        </button>
      </div>
      <img
        src="@/assets/images/MARMRISBACK.png"
        alt=""
        class="restaurants-header__img"
      />
    </header>
    <section class="restaurants-absolute">
      <div class="restaurants-absolute__left">
        <img
          src="@/assets/images/Marmaris.png"
          alt=""
          class="restaurants-absolute__img"
        />
      </div>
      <div class="restaurants-absolute__right">
        <div class="restaurants-absolute__right__block">
          <IconBookmark />
          <p class="restaurants-absolute__right__text">New menu</p>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="restaurants-section">
        <div class="restaurants-main__flex">
          <p class="restaurants-main__text">Мармарис турецкое кафе</p>
          <div class="medium-list__rating">
            <p class="medium-list__number">4,5</p>
            <icon-small-star class="medium-list__star" />
            <p class="medium-list__count">(50+)</p>
          </div>
        </div>
        <div class="restaurants-main__info">
          <div class="restaurants-main__flex">
            <IconLocation />
            <p class="restaurants-main__info__text">
              Проспект Абылай хана, 59/1
            </p>
          </div>
          <div class="restaurants-main__flex">
            <IconClock />
            <p class="restaurants-main__info__text">10:00 - 23:00</p>
          </div>
          <div class="restaurants-main__flex">
            <IconMoped />
            <p class="restaurants-main__info__text">500 ₸</p>
          </div>
          <div class="restaurants-main__flex">
            <IconClock />
            <p class="restaurants-main__info__text">20-30 мин.</p>
          </div>
        </div>
        <Search />
      </div>
    </section>
    <div class="restaurants-bottom">
      <div class="restaurants-bottom__relative">
        <div class="restaurants-bottom__icon">
          <IconMoped />
        </div>
        <p class="restaurants-bottom__sale">
          Бесплатная доставка от 1000 ₸ - 50-60 мин
        </p>
        <p class="restaurants-bottom__price">Работа сервиса 150 ₸</p>
      </div>
    </div>
    <div class="container">
      <Swiper
        :slidesPerView="'auto'"
        :centeredSlides="true"
        :spaceBetween="10"
        :initialSlide="1"
        class="restaurants-slider"
        @slideChange="tab += 1"
      >
        <SwiperSlide class="restaurants-slide" v-for="i in categories" :key="i">
          <p class="restaurants-slide__text">{{ i }}</p>
          <IconPechenka />
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="container" v-if="tab % 2 === 0">
      <div
        @click="$router.push('/category/restaurants/card/1')"
        class="restaurants-food"
        v-for="i in 3"
        :key="i"
      >
        <div class="restaurants-food__flex">
          <div class="restaurants-food__width">
            <p class="restaurants-food__name">
              {{ tab % 2 === 0 ? "Шекер паре" : "Баклава" }}
            </p>
            <p class="restaurants-food__price">850, 00 ₸</p>
            <p class="restaurants-food__desc">
              7 мини-пирожных из песочной крошки, вареной сгущенки и грецких
              орехов
            </p>
          </div>
          <img
            src="@/assets/images/Aldick.jpg"
            alt=""
            class="restaurants-food__img"
          />
        </div>
      </div>
    </div>
    <div class="container" v-else>
      <div
        @click="$router.push('/category/restaurants/card/1')"
        class="restaurants-food"
        v-for="i in 3"
        :key="i"
      >
        <div class="restaurants-food__flex">
          <div class="restaurants-food__width">
            <p class="restaurants-food__name">
              {{ tab % 2 === 0 ? "Шекер паре" : "Баклава" }}
            </p>
            <p class="restaurants-food__price">850, 00 ₸</p>
            <p class="restaurants-food__desc">
              7 мини-пирожных из песочной крошки, вареной сгущенки и грецких
              орехов
            </p>
          </div>
          <img
            src="@/assets/images/baklava.png"
            alt=""
            class="restaurants-food__img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let tab = ref(1);
let categories = [
  "Турецкие сладости",
  "Салаты",
  "Мангал",
  "Турецкие сладости",
  "Салаты",
];
</script>
