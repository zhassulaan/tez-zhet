<template>
  <header class="header py-15 px-10">
    <h2 class="text-center">Профиль</h2>
  </header>
  <section class="container">
    <div class="login">
      <div class="login-top">
        <div class="login-top__input">
          <input
            type="radio"
            name="login"
            id="login1"
            style="display: none"
            :checked="tab === 1"
          />
          <label @click="(tab = 1), (createTab = 1)" for="login1">
            Создать аккаунт
          </label>
        </div>
        <div class="login-top__border"></div>
        <div class="login-top__input">
          <input
            type="radio"
            name="login"
            id="login2"
            :checked="tab === 2"
            style="display: none"
          />
          <label @click="(tab = 2), (logintab = 1)" for="login2"> Войти </label>
        </div>
      </div>
      <div class="container">
        <LoginCreate v-if="tab === 1 && createTab === 1" @tab="createTab = 2" />
        <LoginCreateSms
          v-else-if="tab === 1 && createTab === 2"
          @tab="createTab = 3"
        />
        <LoginCreatePassword v-else-if="tab === 1 && createTab === 3" />
        <Login v-else-if="tab === 2 && logintab === 1" @tab="logintab = 2" />
        <LoginSms v-else-if="tab === 2 && logintab === 2" @tab="logintab = 3" />
        <LoginPassword v-else-if="tab === 2 && logintab === 3" />
      </div>
    </div>
  </section>
</template>

<script setup>
let tab = ref(1);
let createTab = ref(1);
let logintab = ref(1);
</script>
