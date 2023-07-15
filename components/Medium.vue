<template>
  <section
    class="medium"
    v-if="name === 'Рестораны' || name === 'Популярные рестораны'"
  >
    <h2>{{ name }}</h2>
    <div class="medium-list">
      <div
        @click="$router.push('/category/restaurants/1')"
        class="medium-list__one"
        v-for="i in 5"
        :key="i"
      >
        <div class="medium-list__head">
          <img
            v-if="i % 2 === 0"
            src="@/assets/images/restik1.png"
            alt=""
            class="medium-list__img"
          />
          <img
            v-else
            src="@/assets/images/restik2.png"
            alt=""
            class="medium-list__img"
          />
          <div class="medium-list__flex">
            <div class="medium-list__rating">
              <p class="medium-list__number">4,5</p>
              <icon-small-star class="medium-list__star" />
              <p class="medium-list__count">(50+)</p>
            </div>
            <button class="medium-list__favorite favourite_active">
              <icon-favourite />
            </button>
          </div>
          <div class="medium-list__sale">
            <p class="medium-list__sale__text">-10% OFF</p>
          </div>
        </div>
        <div class="medium-list__footer">
          <p class="medium-list__name" v-if="i % 2 === 0">
            Del Papa italian food
          </p>
          <p class="medium-list__name" v-else>Mado turkish food</p>

          <p class="medium-list__category" v-if="i % 2 === 0">
            Пицца, бургеры, твистеры
          </p>
          <p class="medium-list__category" v-else>
            Лахмаджун, пахлава, чорбасы
          </p>

          <div class="medium-list__delivery">
            <div class="medium-list__delivery__info">
              <icon-moped class="medium-list__delivery__svg" />
              <p class="medium-list__delivery__text">Бесплатно</p>
            </div>
            <div class="medium-list__delivery__info">
              <icon-clock class="medium-list__delivery__svg" />
              <p class="medium-list__delivery__text">20-30 мин.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="medium" v-else>
    <h2>{{ name }}</h2>
    <div class="medium-list">
      <div
        @click="$router.push('/category/shops/1')"
        class="medium-list__one"
        v-for="i in 5"
        :key="i"
      >
        <div class="medium-list__head">
          <img
            v-if="i % 2 === 0"
            src="@/assets/images/magaz1.png"
            alt=""
            class="medium-list__img"
          />
          <img
            v-else
            src="@/assets/images/magaz2.png"
            alt=""
            class="medium-list__img"
          />
          <div class="medium-list__flex">
            <div class="medium-list__rating">
              <p class="medium-list__number">4,5</p>
              <icon-small-star class="medium-list__star" />
              <p class="medium-list__count">(50+)</p>
            </div>
            <button class="medium-list__favorite favourite_active">
              <icon-favourite />
            </button>
          </div>
          <div class="medium-list__sale">
            <p class="medium-list__sale__text">-10% OFF</p>
          </div>
        </div>
        <div class="medium-list__footer">
          <p class="medium-list__name" v-if="i % 2 === 0">galmart Forum</p>
          <p class="medium-list__name" v-else>Flamin Go!</p>

          <p class="medium-list__category" v-if="i % 2 === 0">Продукты</p>
          <p class="medium-list__category" v-else>
            Продукты, косметика, аптека
          </p>

          <div class="medium-list__delivery">
            <div class="medium-list__delivery__info">
              <icon-moped class="medium-list__delivery__svg" />
              <p class="medium-list__delivery__text">Бесплатно</p>
            </div>
            <div class="medium-list__delivery__info">
              <icon-clock class="medium-list__delivery__svg" />
              <p class="medium-list__delivery__text">20-30 мин.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  name: String,
});
</script>
