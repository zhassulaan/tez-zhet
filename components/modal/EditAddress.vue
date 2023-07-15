<template>
  <div
    class="modal"
    @click="$emit('modal')"
    :style="isModal ? '' : 'display:none;'"
  ></div>
  <div class="modal-center" v-if="isModal">
    <h2 class="modal-center__h2">Изменить адрес</h2>
    <label for="editAddress" class="login-input">
      <input
        type="text"
        name="editAddress"
        id="editAddress"
        placeholder="ул. Макатаева"
      />
    </label>
    <label for="editHome" class="login-input">
      <input type="text" name="editHome" id="editHome" placeholder="Дом 15" />
    </label>
    <label for="editKv" class="login-input">
      <input type="text" name="editKv" id="editKv" placeholder="Квартира" />
    </label>
    <div @click="$emit('modal')" class="modal-center__btn">Изменить</div>
  </div>
</template>

<script setup>
let count = ref(0);

defineProps({
  isModal: Boolean,
});
</script>
