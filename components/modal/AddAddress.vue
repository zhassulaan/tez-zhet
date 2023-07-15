<template>
  <div
    class="modal"
    @click="$emit('modal')"
    :style="isModal ? '' : 'display:none;'"
  ></div>
  <div class="modal-center" v-if="isModal">
    <h2 class="modal-center__h2">Добавить адрес</h2>
    <label for="addAddress" class="login-input">
      <input
        type="text"
        name="addAddress"
        id="addAddress"
        placeholder="ул. Макатаева"
      />
    </label>
    <label for="addHome" class="login-input">
      <input type="text" name="addHome" id="addHome" placeholder="Дом 15" />
    </label>
    <label for="addKv" class="login-input">
      <input type="text" name="addKv" id="addKv" placeholder="Квартира" />
    </label>
    <div @click="$emit('modal')" class="modal-center__btn">Добавить</div>
  </div>
</template>

<script setup>
let count = ref(0);

defineProps({
  isModal: Boolean,
});
</script>
