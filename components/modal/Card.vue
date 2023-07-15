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
    <div class="modal-bottom__card">
      <button @click="$emit('modal')" class="modal-bottom__card__back">
        <IconChevron class="rotate-90" />
      </button>
      <div class="modal-bottom__card__block">
        <img
          src="@/assets/images/ModalCard.png"
          alt=""
          class="modal-bottom__card__img"
        />
      </div>
      <p class="modal-bottom__card__price">1500, 00 ₸</p>
      <p class="modal-bottom__card__text">Гранат Гюлейша розовая</p>
      <p class="modal-bottom__card__text">Азербайджан 5 шт</p>
      <div class="card-section__count">
        <button
          @click="count > 0 ? count-- : count"
          class="card-section__count__btn"
        >
          <IconMinus />
        </button>
        <p class="card-section__count__text">{{ count }}</p>
        <button @click="count++" class="card-section__count__btn">
          <IconPlus />
        </button>
      </div>
      <button class="modal-bottom__card__btn">Добавить в корзину</button>
    </div>
  </div>
</template>

<script setup>
let count = ref(0);

defineProps({
  isModal: Boolean,
});
</script>
