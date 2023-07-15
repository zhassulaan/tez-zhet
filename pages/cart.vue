<template>
  <ModalCard :isModal="isModal" @modal="isModal = false" />
  <ModalOrder :isModal="isOrder" @modal="isOrder = false" />
  <div class="container">
    <header class="header mb-10">
      <button @click="$router.go(-1)">
        <icon-chevron class="rotate-90" />
      </button>
      <h2 class="header-absolute">Корзина</h2>
    </header>
    <div class="cart-items">
      <CartOne v-for="i in 3" :key="i" />
      <div class="cart-items__menu">Открыть меню</div>
    </div>
    <div class="cart-cutlery">
      <div class="cart-cutlery__left">
        <IconCutlery />
        <p class="cart-cutlery__left__text">Приборы</p>
      </div>
      <input type="checkbox" id="cutlery" style="display: none" />
      <label for="cutlery"> </label>
    </div>
    <div class="cart-buy">
      <h2>Получение</h2>
      <div class="cart-buy__btns">
        <input
          type="radio"
          id="dostavka"
          name="cartChoice"
          checked
          style="display: none"
        />
        <label for="dostavka">Доставка</label>
        <input
          type="radio"
          id="samovivoz"
          name="cartChoice"
          style="display: none"
        />
        <label for="samovivoz">Навынос</label>
      </div>
      <div class="cart-buy__info">
        <div class="cart-buy__flex">
          <p class="cart-buy__text">Стоимость доставки</p>
          <p class="cart-buy__price">500₸</p>
        </div>
        <div class="cart-buy__flex">
          <p class="cart-buy__text">Работа сервиса</p>
          <p class="cart-buy__price">150₸</p>
        </div>
        <div class="cart-buy__flex">
          <p class="cart-buy__text">Итого</p>
          <p class="cart-buy__price">1500 ₸</p>
        </div>
      </div>
      <div class="cart-buy__flex">
        <p class="cart-buy__text"><IconSmallStar /> Бонусы</p>
        <p class="cart-buy__price">+10 b</p>
      </div>
      <div @click="isOrder = !isOrder" class="cart-buy__btn">Продолжить</div>
    </div>
    <div class="cart-buy__rec">
      <h3 class="cart-buy__h3">Рекомендуем к покупке</h3>
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
</template>

<script setup>
let isOrder = ref(false);
let isModal = ref(false);
const router = useRouter();
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
];
</script>
