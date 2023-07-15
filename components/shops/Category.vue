<template>
  <NuxtLink to="/category/shops/one" class="shops-sections__one">
    <img
      src="@/assets/images/magnumCategory1.png"
      alt=""
      class="shops-sections__img"
    />
    <div class="shops-sections__bottom">
      <p class="shops-sections__name">Фрукты и овощи</p>
    </div>
  </NuxtLink>
  <NuxtLink to="/category/shops/one" class="shops-sections__one">
    <img src="@/assets/images/magnus.png" alt="" class="shops-sections__img" />
    <div class="shops-sections__bottom">
      <p class="shops-sections__name">Мороженое</p>
    </div>
  </NuxtLink>
  <NuxtLink to="/category/shops/one" class="shops-sections__one">
    <img
      src="@/assets/images/magnumCategory3.png"
      alt=""
      class="shops-sections__img"
    />
    <div class="shops-sections__bottom">
      <p class="shops-sections__name">Напитки</p>
    </div>
  </NuxtLink>
  <NuxtLink to="/category/shops/one" class="shops-sections__one">
    <img
      src="@/assets/images/magnumCategory4.png"
      alt=""
      class="shops-sections__img"
    />
    <div class="shops-sections__bottom">
      <p class="shops-sections__name">Сладкое</p>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  index: Number,
});
</script>
