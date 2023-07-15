<template>
  <header class="card-header">
    <div class="restaurants-header__flex">
      <button @click="$router.go(-1)" class="restaurants-header__btn">
        <icon-chevron class="rotate-90 -ml-2" />
      </button>
    </div>
    <img src="@/assets/images/Aldick.png" alt="" class="card-header__img" />
  </header>
  <section class="card-section">
    <p class="card-section__name">Шекер паре</p>
    <p class="card-section__price">850, 00 ₸</p>
    <p class="card-section__text">
      Восточная сладость в виде пропитанного маслом и сиропом слоёного пирога с
      начинкой из растёртых орехов, сахара и кардамона.
    </p>
    <div class="card-section__count">
      <button @click="count--" class="card-section__count__btn">
        <IconMinus />
      </button>
      <p class="card-section__count__text">{{ count }}</p>
      <button @click="count++" class="card-section__count__btn">
        <IconPlus />
      </button>
    </div>
    <button class="card-section__cart">Добавить в корзину</button>
  </section>
</template>

<script setup>
let count = ref(0);
definePageMeta({
  layout: "none",
});
</script>
