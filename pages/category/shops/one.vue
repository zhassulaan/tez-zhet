<template>
  <ModalCard :isModal="isModal" @modal="isModal = !isModal" />

  <div class="container">
    <header class="header mb-10">
      <button @click="$router.go(-1)">
        <icon-chevron class="rotate-90" />
      </button>
      <h2 class="header-absolute">{{ category }}</h2>
    </header>
    <Search />
  </div>
  <section class="container">
    <div class="shops-one__list">
      <div
        @click="category = i.name"
        :class="
          category === i.name ? 'shops-one__btn__active' : 'shops-one__btn'
        "
        v-for="i in data"
        :key="i"
      >
        {{ i.name }}
      </div>
    </div>
  </section>
  <div class="shops-new">
    <h2>Новые</h2>
    <div
      class="shops-new__list"
      v-if="category === 'Овощи и фрукты' || category === 'Фрукты'"
    >
      <ShopsCard
        v-for="(card, index) in cards"
        :key="card.name"
        :card="card"
        :index="index"
        @modal="isModal = !isModal"
      />
    </div>
    <div class="shops-new__list" v-else>
      <div @click="$emit('modal')" class="shops-new__one">
        <div class="shops-new__block">
          <img src="@/assets/images/tovar3.png" alt="" class="shops-new__img" />
        </div>
        <p class="shops-new__price">850</p>
        <p class="shops-new__name">Название</p>
        <div class="shops-new__flex">
          <p class="shops-new__weight">1 кг</p>
          <p class="shops-new__info">850, 00 ₸</p>
        </div>
        <div @click.stop>
          <button
            @click="isCart = !isCart"
            class="shops-new__btn"
            v-if="!isCart"
          >
            <IconPlus />
          </button>
          <div class="shops-new__cart" v-else>
            <button @click="count > 1 && count--" class="shops-new__cart__btn">
              <IconMinus />
            </button>
            <p class="shops-new__cart__count">{{ count }}</p>
            <button @click="count++" class="shops-new__cart__btn">
              <IconPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="shops-new">
    <h2>Овощи</h2>
    <div class="shops-new__list">
      <ShopsCard
        v-for="(card, index) in cards"
        :key="card.name"
        :card="card"
        :index="index"
        @modal="isModal = !isModal"
      />
    </div>
  </div>
  <div class="container">
    <div class="shops-btn" @click="$router.push('/cart')">
      <p class="shops-btn__text">Перейти в корзину</p>
      <p class="shops-btn__text">1 за 850, 00 ₸</p>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
let category = ref("Овощи и фрукты");
let isModal = ref(false);

const data = [
  { name: "Овощи и фрукты" },
  { name: "Яблоки и груши" },
  { name: "Фрукты" },
  { name: "Овощи" },
];

const cards = [
  {
    img: "@/assets/images/new1.png",
    price: "850, 00 ₸",
    name: "Hershey’s молочный шоколад",
  },
  {
    img: "@/assets/images/new2.png",
    price: "850, 00 ₸",
    name: "Corn Flakes кукурузные хлопья",
  },
  {
    img: "@/assets/images/new3.png",
    price: "850, 00 ₸",
    name: "Натуральные ягоды ",
  },
];

const cards2 = [
  {
    img: "assets/images/new2.png",
    price: "850, 00 ₸",
    name: "Corn Flakes кукурузные хлопья",
  },
  {
    img: "assets/images/new1.png",
    price: "850, 00 ₸",
    name: "Авокадо",
  },
  {
    img: "assets/images/new3.png",
    price: "850, 00 ₸",
    name: "Гранат, кг",
  },
];
</script>
