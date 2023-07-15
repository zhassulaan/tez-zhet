<template>
  <footer class="footer">
    <div
      @click="$router.push('/')"
      :class="
        router.fullPath === '/' || router.fullPath.includes('news')
          ? 'footer-one__active'
          : 'footer-one'
      "
    >
      <icon-home />
      Главная
    </div>
    <div
      @click="$router.push('/category')"
      :class="
        router.fullPath.includes('category')
          ? 'footer-one__active'
          : 'footer-one'
      "
    >
      <icon-category />
      Категория
    </div>
    <div
      @click="$router.push('/cart')"
      :class="
        router.fullPath.includes('cart') ? 'footer-one__active' : 'footer-one'
      "
    >
      <div class="footer-one__count">2</div>
      <icon-cart />
      Корзина
    </div>
    <div
      @click="$router.push('/profile')"
      :class="
        router.fullPath.includes('/profile')
          ? 'footer-one__active'
          : 'footer-one'
      "
    >
      <icon-person />
      Профиль
    </div>
  </footer>
</template>

<script setup>
const router = useRoute();
</script>
