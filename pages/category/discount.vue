<template>
  <ModalCard :isModal="isModal" @modal="isModal = false" />
  <div class="container">
    <header class="header mb-10">
      <button @click="$router.go(-1)">
        <icon-chevron class="rotate-90" />
      </button>
      <h2 class="header-absolute">Акции</h2>
    </header>
    <category-banner />

    <h2>Акции 26.04 - 09.05</h2>
    <div class="my-15">
      <div class="cart-buy__rec">
        <div class="shops-new__list">
          <ShopsCard
            v-for="card in cards"
            :key="card.name"
            :card="card"
            @modal="isModal = !isModal"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let isModal = ref(false);
const cards = [
  {
    img: "assets/images/new1.png",
    price: "850, 00 ₸",
    name: "Hershey’s молочный шоколад",
  },
  {
    img: "assets/images/new2.png",
    price: "850, 00 ₸",
    name: "Corn Flakes кукурузные хлопья",
  },
  {
    img: "assets/images/new3.png",
    price: "850, 00 ₸",
    name: "Натуральные ягоды ",
  },
  {
    img: "assets/images/new3.png",
    price: "850, 00 ₸",
    name: "Натуральные ягоды ",
  },
  {
    img: "assets/images/new3.png",
    price: "850, 00 ₸",
    name: "Натуральные ягоды ",
  },
  {
    img: "assets/images/new3.png",
    price: "850, 00 ₸",
    name: "Натуральные ягоды ",
  },
];
</script>
