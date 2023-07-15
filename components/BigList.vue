<template>
  <section class="big" v-if="name">
    <NuxtLink :to="link || '/category/restaurants/1'" class="big-list">
      <div class="big-list__one" v-for="i in 2" :key="i">
        <div class="big-list__head">
          <img
            v-if="i % 2 === 0"
            src="@/assets/images/magnum1.png"
            alt=""
            class="big-list__img"
          />
          <img
            v-else
            src="@/assets/images/magnum2.png"
            alt=""
            class="big-list__img"
          />
          <div class="big-list__flex">
            <div class="big-list__rating">
              <p class="big-list__number">4,5</p>
              <icon-small-star class="big-list__star" />
              <p class="big-list__count">(50+)</p>
            </div>
            <button class="big-list__favorite favourite_active">
              <icon-favourite />
            </button>
          </div>
        </div>
        <div class="big-list__footer">
          <p class="big-list__name" v-if="i % 2 === 0">Magnum</p>
          <p class="big-list__name" v-else>Carefood</p>
          <p class="big-list__category" v-if="i % 2 === 0">Продукты</p>

          <p class="big-list__category" v-else>Продукты</p>
          <div class="big-list__delivery">
            <div class="big-list__delivery__info">
              <icon-moped class="big-list__delivery__svg" />
              <p class="big-list__delivery__text">Бесплатно</p>
            </div>
            <div class="big-list__delivery__info">
              <icon-clock class="big-list__delivery__svg" />
              <p class="big-list__delivery__text">20-30 мин.</p>
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </section>
  <section class="big" v-else>
    <NuxtLink :to="link || '/category/restaurants/1'" class="big-list">
      <div class="big-list__one" v-for="i in 3" :key="i">
        <div class="big-list__head">
          <img
            v-if="i % 2 === 0"
            src="@/assets/images/category1.png"
            alt=""
            class="big-list__img"
          />
          <img
            v-else
            src="@/assets/images/category2.png"
            alt=""
            class="big-list__img"
          />
          <div class="big-list__flex">
            <div class="big-list__rating">
              <p class="big-list__number">4,5</p>
              <icon-small-star class="big-list__star" />
              <p class="big-list__count">(50+)</p>
            </div>
            <button class="big-list__favorite favourite_active">
              <icon-favourite />
            </button>
          </div>
        </div>
        <div class="big-list__footer">
          <p class="big-list__name" v-if="i % 2 === 0">Starbucks</p>
          <p class="big-list__name" v-else>Hardee’s Sinooil</p>
          <p class="big-list__category" v-if="i % 2 === 0">
            Кофе со льдом, маффины, латте
          </p>

          <p class="big-list__category" v-else>Бургеры, чизи фрайз, Pepsi</p>
          <div class="big-list__delivery">
            <div class="big-list__delivery__info">
              <icon-moped class="big-list__delivery__svg" />
              <p class="big-list__delivery__text">Бесплатно</p>
            </div>
            <div class="big-list__delivery__info">
              <icon-clock class="big-list__delivery__svg" />
              <p class="big-list__delivery__text">20-30 мин.</p>
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </section>
</template>

<script setup>
defineProps({
  link: {
    type: String,
  },
  name: {
    type: String,
    required: false,
  },
});
</script>
