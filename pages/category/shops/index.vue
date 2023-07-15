<template>
  <div class="container">
    <header class="header mb-10">
      <button @click="$router.go(-1)">
        <icon-chevron class="rotate-90" />
      </button>
      <h2 class="header-absolute">Магазины</h2>
    </header>
    <small-search />
    <small-category :name="'Магазины'" />
    <medium :name="'Акции'" />
    <medium :name="'Популярные магазины'" />

    <h2>Популярные магазины</h2>

    <big-list :link="'/category/shops/1'" />
  </div>
</template>

<script setup>
const router = useRouter();
</script>
