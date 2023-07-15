<template>
  <div class="container">
    <header class="header mb-10">
      <button @click="router.go(-1)">
        <icon-chevron class="rotate-90" />
      </button>
      <h2 class="header-absolute">Избранное</h2>
    </header>
    <div>
      <big-list />
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
</script>
