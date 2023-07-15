<template>
  <div class="container">
    <header class="header mb-10">
      <button @click="router.go(-1)">
        <icon-chevron class="rotate-90" />
      </button>
      <h2 class="header-absolute">Языки</h2>
    </header>
  </div>
  <section class="language">
    <label for="language1" class="language-one">
      <p class="language-one__text">Казахский язык</p>
      <div class="language-one__radio">
        <input
          type="radio"
          id="language1"
          name="language"
          style="display: none"
        />
        <label for="language1"></label>
      </div>
    </label>
    <label for="language2" class="language-one">
      <p class="language-one__text">Русский язык</p>
      <div class="language-one__radio">
        <input
          type="radio"
          id="language2"
          name="language"
          style="display: none"
        />
        <label for="language2"></label>
      </div>
    </label>
  </section>
</template>
<script setup>
const router = useRouter();
</script>
