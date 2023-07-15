<template>
  <div class="container">
    <header class="header mb-10">
      <button @click="router.go(-1)">
        <icon-chevron class="rotate-90" />
      </button>
      <h2 class="header-absolute">Мои уведомления</h2>
    </header>
    <section class="notification">
      <div class="notification-flex">
        <p class="notification-text">Push -уедомления</p>
        <input
          type="checkbox"
          id="notification"
          name="notification"
          style="display: none"
        />
        <label for="notification"> </label>
      </div>
    </section>
  </div>
</template>
<script setup>
const router = useRouter();
</script>
