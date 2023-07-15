<template>
  <div class="container">
    <header class="header mb-10">
      <button @click="router.go(-1)">
        <icon-chevron class="rotate-90" />
      </button>
      <h2 class="header-absolute">История заказов</h2>
    </header>
    <section class="story">
      <div class="story-block">
        <div class="story-block__border">
          <p class="story-block__p">28.04.2023</p>
          <p class="story-block__p mt-10">
            ул. Макатаева, 127\1 проспект Сейфуллина, 483
          </p>
        </div>
        <div class="story-block__one">
          <img
            src="@/assets/images/Aldick.jpg"
            alt=""
            class="story-block__img"
          />
          <div class="story-block__right">
            <p class="story-block__name">Пахлава</p>
            <p class="story-block__price">850, 00 ₸</p>
            <p class="story-block__text">
              7 мини-пирожных из песочной крошки, вареной сгущенки и грецких
              орехов
            </p>
          </div>
        </div>
        <div class="story-block__one">
          <img
            src="@/assets/images/Aldick.jpg"
            alt=""
            class="story-block__img"
          />
          <div class="story-block__right">
            <p class="story-block__name">Пахлава</p>
            <p class="story-block__price">850, 00 ₸</p>
            <p class="story-block__text">
              7 мини-пирожных из песочной крошки, вареной сгущенки и грецких
              орехов
            </p>
          </div>
        </div>
        <div class="story-block__cafe">
          <div class="story-block__cafe__left">
            <img
              src="@/assets/images/Marmaris.png"
              alt=""
              class="story-block__cafe__img"
            />
          </div>
          <p class="story-block__name">Мармарис турецкое кафе</p>
        </div>
        <div class="story-block__btn">Повторить заказ 1700, 00 ₸</div>
      </div>
    </section>
  </div>
</template>
<script setup>
const router = useRouter();
</script>
