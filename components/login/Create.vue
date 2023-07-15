<template>
  <form class="login-create">
    <label for="name" class="login-input">
      <IconPerson />
      <input type="text" name="login" id="name" placeholder="Имя" />
    </label>
    <label for="name" class="login-input">
      <IconPhone />
      <input
        type="text"
        name="login"
        id="name"
        placeholder="+7 (777) 777 77 77"
        v-mask="'+7 (###)-###-##-##'"
        v-model="phone"
      />
    </label>
    <div @click="$emit('tab')" class="login-btn">Получить код</div>
  </form>
</template>

<script setup>
let phone = ref("");
</script>
