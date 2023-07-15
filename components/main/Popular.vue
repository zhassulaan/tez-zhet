<template>
  <section class="main-popular">
    <h2 class="main-popular__h2">Популярная категория</h2>
    <div class="main-popular__list">
      <div @click="$router.push('/category')" class="main-popular__one">
        <div class="main-popular__box">
          <div class="main-popular__circle">
            <img
              src="@/assets/images/popular2.png"
              alt=""
              class="main-popular__img"
            />
          </div>
        </div>
        <p class="main-popular__text">Новинки</p>
      </div>
      <div @click="$router.push('/category')" class="main-popular__one">
        <div class="main-popular__box">
          <div class="main-popular__circle">
            <img
              src="@/assets/images/popular3.png"
              alt=""
              class="main-popular__img"
            />
          </div>
        </div>
        <p class="main-popular__text">Итальянская</p>
      </div>
      <div @click="$router.push('/category')" class="main-popular__one">
        <div class="main-popular__box">
          <div class="main-popular__circle">
            <img
              src="@/assets/images/popular4.png"
              alt=""
              class="main-popular__img"
            />
          </div>
        </div>
        <p class="main-popular__text">Пицца</p>
      </div>
      <div @click="$router.push('/category')" class="main-popular__one">
        <div class="main-popular__box">
          <div class="main-popular__circle">
            <img
              src="@/assets/images/popular5.png"
              alt=""
              class="main-popular__img"
            />
          </div>
        </div>
        <p class="main-popular__text">Салаты</p>
      </div>
      <div @click="$router.push('/category')" class="main-popular__one">
        <div class="main-popular__box">
          <div class="main-popular__circle">
            <img
              src="@/assets/images/popular2.png"
              alt=""
              class="main-popular__img"
            />
          </div>
        </div>
        <p class="main-popular__text">Новинки</p>
      </div>
      <div @click="$router.push('/category')" class="main-popular__one">
        <div class="main-popular__box">
          <div class="main-popular__circle">
            <img
              src="@/assets/images/popular3.png"
              alt=""
              class="main-popular__img"
            />
          </div>
        </div>
        <p class="main-popular__text">Итальянская</p>
      </div>
      <div @click="$router.push('/category')" class="main-popular__one">
        <div class="main-popular__box">
          <div class="main-popular__circle">
            <img
              src="@/assets/images/popular4.png"
              alt=""
              class="main-popular__img"
            />
          </div>
        </div>
        <p class="main-popular__text">Пицца</p>
      </div>
      <div @click="$router.push('/category')" class="main-popular__one">
        <div class="main-popular__box">
          <div class="main-popular__circle">
            <img
              src="@/assets/images/popular5.png"
              alt=""
              class="main-popular__img"
            />
          </div>
        </div>
        <p class="main-popular__text">Салаты</p>
      </div>
      <div @click="$router.push('/category')" class="main-popular__one">
        <div class="main-popular__box">
          <div class="main-popular__circle">
            <img
              src="@/assets/images/popular2.png"
              alt=""
              class="main-popular__img"
            />
          </div>
        </div>
        <p class="main-popular__text">Новинки</p>
      </div>
      <div @click="$router.push('/category')" class="main-popular__one">
        <div class="main-popular__box">
          <div class="main-popular__circle">
            <img
              src="@/assets/images/popular3.png"
              alt=""
              class="main-popular__img"
            />
          </div>
        </div>
        <p class="main-popular__text">Итальянская</p>
      </div>
      <div @click="$router.push('/category')" class="main-popular__one">
        <div class="main-popular__box">
          <div class="main-popular__circle">
            <img
              src="@/assets/images/popular4.png"
              alt=""
              class="main-popular__img"
            />
          </div>
        </div>
        <p class="main-popular__text">Пицца</p>
      </div>
      <div @click="$router.push('/category')" class="main-popular__one">
        <div class="main-popular__box">
          <div class="main-popular__circle">
            <img
              src="@/assets/images/popular5.png"
              alt=""
              class="main-popular__img"
            />
          </div>
        </div>
        <p class="main-popular__text">Салаты</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const data = ["Новинки", "Бургеры", "Итальянская", "Пицца", "Салаты", "Салаты"];
</script>
