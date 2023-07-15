<template>
  <form class="login-create">
    <p class="login-text text-center">Вы не получили код?</p>
    <div class="login-counter" v-if="counter >= 1">
      Отправить повторно через {{ counter }}
    </div>
    <div class="login-counter" @click="counter = 60" v-else>
      Отправить повторно
    </div>
    <p class="login-text text-center">На ваш номер телефон придет код SMS</p>
    <label for="name" class="login-input">
      <input
        type="text"
        name="login"
        id="name"
        placeholder="Код SMS"
        v-mask="'####'"
        v-model="smsCode"
      />
    </label>
    <div @click="$emit('tab')" class="login-btn">Подтвердить</div>
  </form>
</template>

<script setup>
let smsCode = ref("");
let counter = ref(60);

setInterval(() => {
  if (counter.value >= 1) {
    counter.value--;
  }
}, 1000);
</script>
