<template>
  <div
    class="modal"
    @click="$emit('modal')"
    :style="isModal ? '' : 'display:none;'"
  ></div>
  <div class="modal-center" v-if="isModal">
    <div class="modal-center__close" @click="$emit('modal')">
      <IconX />
    </div>
    <h2 class="modal-center__h2">Оцените пожалуйста!</h2>
    <div class="modal-mark__img">
      <img src="@/assets/images/Marmaris.png" alt="" />
    </div>
    <p class="modal-mark__name">Мармарис турецкое кафе</p>
    <div class="modal-mark__stars">
      <IconSmallStar
        @click="stars = i"
        v-for="i in 5"
        :key="i"
        :class="stars >= i && 'active__star'"
      />
    </div>
    <div class="modal-mark__btn">Оценить</div>
  </div>
</template>

<script setup>
let stars = ref(1);

defineProps({
  isModal: Boolean,
});
</script>
