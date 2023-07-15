<template>
  <div
    class="modal"
    @click="$emit('modal')"
    :style="isModal ? '' : 'display:none;'"
  ></div>
  <div class="modal-center" v-if="isModal">
    <h2 class="modal-center__h2">Уверены, что хотите удалить свою карту ?</h2>
    <div class="modal-center__btns">
      <div @click="$emit('modal')" class="modal-center__ok">Да</div>
      <div @click="$emit('modal')" class="modal-center__no">Нет</div>
    </div>
  </div>
</template>

<script setup>
let count = ref(0);

defineProps({
  isModal: Boolean,
});
</script>
