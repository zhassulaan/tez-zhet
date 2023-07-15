<template>
  <div class="container">
    <header class="header mb-10">
      <button @click="router.go(-1)">
        <icon-chevron class="rotate-90" />
      </button>
      <h2 class="header-absolute">Оцените приложение</h2>
    </header>
  </div>
  <section class="mark">
    <div class="mark-stars">
      <IconSmallStar
        @click="stars = i"
        v-for="i in 5"
        :key="i"
        :class="i <= stars && 'mark-stars__active'"
      />
    </div>
    <div class="mark-btn">Отправить</div>
  </section>
</template>
<script setup>
const router = useRouter();
let stars = ref(1);
</script>
