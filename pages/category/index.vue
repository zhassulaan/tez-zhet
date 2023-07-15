<template>
  <section class="container">
    <search />
    <category-banner />
    <NuxtLink to="/category/restaurants" class="category-one">
      <img
        src="@/assets/images/categoryOne.png"
        alt=""
        class="category-one__img"
      />
      <div class="category-one__btn">
        <p class="category-one__btn__text">Рестораны</p>
        <icon-restaurant />
      </div>
    </NuxtLink>
    <NuxtLink to="/category/shops" class="category-one">
      <img src="@/assets/images/cat1.png" alt="" class="category-one__img" />
      <div class="category-one__btn">
        <p class="category-one__btn__text">Магазины</p>
        <icon-market />
      </div>
    </NuxtLink>
  </section>
</template>
