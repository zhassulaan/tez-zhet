<template>
  <div
    class="modal"
    @click="$emit('modal')"
    :style="isModal ? '' : 'display:none;'"
  ></div>
  <div
    class="modal-bottom"
    :style="
      isModal ? 'transform:translateY(0%);' : 'transform:translateY(100%);'
    "
    @click.stop
  >
    <div class="modal-bottom__order">
      <div class="modal-bottom__close" @click="$emit('modal')">
        <IconX />
      </div>
      <p class="modal-bottom__status__name">Заказ в пути</p>
      <p class="modal-bottom__status__text">
        Мы сообщим вам, когда курьер прибудет по вашему адресу
      </p>
      <div class="modal-bottom__status__flex">
        <div class="modal-bottom__status__one__active">
          <IconCheck />
        </div>
        <div class="modal-bottom__status__one">
          <IconCart />
        </div>
        <div class="modal-bottom__status__one">
          <IconMoped />
        </div>
        <div class="modal-bottom__status__one">
          <IconLocation />
        </div>
      </div>
      <div class="modal-bottom__status__phone">
        <IconPhone />
        Курьер Ержан
      </div>
      <div class="modal-bottom__status__support">
        <IconSupport />
        Поддержка
      </div>
      <div class="modal-bottom__status__support" v-if="false">
        Отменить заказ
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isModal: Boolean,
});
</script>
