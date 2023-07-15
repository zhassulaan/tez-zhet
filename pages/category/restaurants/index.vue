<template>
  <div class="container">
    <header class="header mb-10">
      <button @click="$router.go(-1)">
        <icon-chevron class="rotate-90" />
      </button>
      <h2 class="header-absolute">Рестораны</h2>
    </header>
    <small-search />
    <small-category :name="'Рестораны'" />
    <medium :name="'Акции'" />
    <medium :name="'Популярные рестораны'" />
    <h2>Все рестораны</h2>

    <big-list />
  </div>
</template>

<script setup>
const router = useRouter();
</script>
