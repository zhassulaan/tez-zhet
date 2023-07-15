<template>
  <div class="container">
    <header class="header mb-10">
      <button @click="router.go(-1)">
        <icon-chevron class="rotate-90" />
      </button>
      <h2 class="header-absolute">Категории</h2>
    </header>
    <section class="category">
      <div class="category-grid" v-if="link === '/category/restaurants/cat/1'">
        <NuxtLink :to="link" class="category-grid__one">
          <img
            src="@/assets/images/cat3.png"
            alt=""
            class="category-grid__img"
          />

          <div class="category-grid__block">
            <p class="category-grid__text">Мороженое</p>
            <p class="category-grid__count">110 заведений</p>
          </div>
        </NuxtLink>
        <NuxtLink :to="link" class="category-grid__one">
          <img
            src="@/assets/images/cat4.png"
            alt=""
            class="category-grid__img"
          />

          <div class="category-grid__block">
            <p class="category-grid__text">Супы</p>

            <p class="category-grid__count">110 заведений</p>
          </div>
        </NuxtLink>
        <NuxtLink :to="link" class="category-grid__one">
          <img
            src="@/assets/images/cat5.png"
            alt=""
            class="category-grid__img"
          />

          <div class="category-grid__block">
            <p class="category-grid__text">Завтрак</p>

            <p class="category-grid__count">110 заведений</p>
          </div>
        </NuxtLink>
        <NuxtLink :to="link" class="category-grid__one">
          <img
            src="@/assets/images/catPizza.png"
            alt=""
            class="category-grid__img"
          />

          <div class="category-grid__block">
            <p class="category-grid__text">Пицца</p>

            <p class="category-grid__count">110 заведений</p>
          </div>
        </NuxtLink>
      </div>
      <div class="category-grid" v-else>
        <NuxtLink :to="link" class="category-grid__one">
          <img
            src="@/assets/images/shops1.png"
            alt=""
            class="category-grid__img"
          />

          <div class="category-grid__block">
            <p class="category-grid__text">Продукты</p>
            <p class="category-grid__count">110 заведений</p>
          </div>
        </NuxtLink>
        <NuxtLink :to="link" class="category-grid__one">
          <img
            src="@/assets/images/shops2.png"
            alt=""
            class="category-grid__img"
          />

          <div class="category-grid__block">
            <p class="category-grid__text">Мороженое</p>

            <p class="category-grid__count">110 заведений</p>
          </div>
        </NuxtLink>
        <NuxtLink :to="link" class="category-grid__one">
          <img
            src="@/assets/images/shops3.png"
            alt=""
            class="category-grid__img"
          />

          <div class="category-grid__block">
            <p class="category-grid__text">Выпечка</p>

            <p class="category-grid__count">110 заведений</p>
          </div>
        </NuxtLink>
        <NuxtLink :to="link" class="category-grid__one">
          <img
            src="@/assets/images/shops4.png"
            alt=""
            class="category-grid__img"
          />

          <div class="category-grid__block">
            <p class="category-grid__text">Фармацевтика</p>

            <p class="category-grid__count">110 заведений</p>
          </div>
        </NuxtLink>
        <NuxtLink :to="link" class="category-grid__one">
          <img
            src="@/assets/images/shops5.png"
            alt=""
            class="category-grid__img"
          />

          <div class="category-grid__block">
            <p class="category-grid__text">Уходовая косметика</p>

            <p class="category-grid__count">110 заведений</p>
          </div>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
const router = useRouter();
const route = useRoute();
let link = ref("/category/restaurants/cat/1");
if (route.query.shop === "true") {
  link.value = "/category/shops/cat/1";
}
</script>
