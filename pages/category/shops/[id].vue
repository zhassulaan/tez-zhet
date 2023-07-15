<template>
  <div class="restaurants" @scroll="scrolling">
    <ModalCard :isModal="isModal" @modal="isModal = !isModal" />
    <header class="restaurants-header">
      <div class="restaurants-header__flex">
        <button @click="router.go(-1)" class="restaurants-header__btn">
          <icon-chevron class="rotate-90 -ml-2" />
        </button>
        <button class="restaurants-header__btn favourite_active">
          <icon-favourite />
        </button>
      </div>
      <img
        src="@/assets/images/magnumTovar.png"
        alt=""
        class="restaurants-header__img"
      />
    </header>
    <section class="restaurants-absolute">
      <div class="restaurants-absolute__left">
        <img
          src="https://wikicity.kz/fotos_ms/Company_1696_h0K0K2hTe2StKFhZ4EFz2SY.png"
          alt=""
          class="restaurants-absolute__img"
        />
      </div>
    </section>
    <section class="container">
      <div class="restaurants-section">
        <div class="restaurants-main__flex">
          <p class="restaurants-main__text">Magnum</p>
          <div class="medium-list__rating">
            <p class="medium-list__number">4,5</p>
            <icon-small-star class="medium-list__star" />
            <p class="medium-list__count">(50+)</p>
          </div>
        </div>
        <div class="restaurants-main__info">
          <div class="restaurants-main__flex">
            <p class="restaurants-main__info__text">
              От предметов первой необходимости до еженедельных покупок.
              Быстрая, простая и практичная доставка продуктов в лбое время!
            </p>
          </div>
          <div class="restaurants-main__flex">
            <IconClock />
            <p class="restaurants-main__info__text">10:00 - 23:00</p>
          </div>
          <div class="restaurants-main__flex">
            <IconMoped />
            <p class="restaurants-main__info__text">500 ₸</p>
          </div>
          <div class="restaurants-main__flex">
            <IconClock />
            <p class="restaurants-main__info__text">20-30 мин.</p>
          </div>
        </div>
        <Search />
      </div>
    </section>
    <section class="shops-new">
      <h2>Новые</h2>
      <div class="shops-new__list">
        <ShopsCard
          v-for="(card, index) in cards"
          :key="card.name"
          :card="card"
          :index="index"
          @modal="isModal = !isModal"
        />
      </div>
    </section>
    <section class="shops-sections">
      <h2>Находите что угодно</h2>
      <div class="shops-sections__list">
        <ShopsCategory />
      </div>
    </section>
  </div>
</template>

<script setup>
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
