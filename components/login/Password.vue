<template>
  <form class="login-create">
    <p class="login-text text-center">Восстановление пароля</p>
    <label for="name" class="login-input">
      <IconLock />
      <input type="password" name="login" id="name" placeholder="Пароль" />
    </label>
    <label for="name" class="login-input">
      <IconLock />
      <input
        type="password"
        name="login"
        id="name"
        placeholder="Повторить пароль"
      />
    </label>
    <div @click="$emit('tab')" class="login-btn">Сменить пароль</div>
  </form>
</template>

<script setup></script>
