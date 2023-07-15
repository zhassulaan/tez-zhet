<template>
  <div class="container">
    <header class="header mb-10">
      <button @click="$router.go(-1)">
        <icon-chevron class="rotate-90" />
      </button>
      <h2 class="header-absolute">Еврейская</h2>
    </header>
    <big-list />
  </div>
</template>

<script setup></script>
