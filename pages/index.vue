<template>
  <ModalStatus :isModal="isModal" @modal="isModal = false" />
  <div class="container">
    <header class="header">
      <header class="header-main">
        <IconLogo />
        <button class="header-main__address">
          <icon-location />
          Шевченко, 165
          <icon-chevron />
        </button>
        <button>
          <icon-bell />
        </button>
      </header>
    </header>
    <main-warning />
    <main-banner />
    <search />
    <main-popular />
    <medium v-for="i in mediumList" :key="i" :name="i" />
    <main-news-list />
    <div @click="isModal = !isModal" class="main-status__btn">
      <p>Посмотреть статус заказ</p>
      <IconChevron class="-rotate-90" />
    </div>
  </div>
</template>

<script setup>
let isModal = ref(false);
let mediumList = ref(["Рестораны", "Магазины"]);
</script>
