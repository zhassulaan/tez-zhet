<template>
  <div @click="$emit('modal')" class="shops-new__one">
    <div class="shops-new__block">
      <img
        v-if="index % 3 === 0"
        src="@/assets/images/tovar3.png"
        alt=""
        class="shops-new__img"
      />
      <img
        v-else-if="index % 2 === 0"
        src="@/assets/images/new1.png"
        alt=""
        class="shops-new__img"
      />
      <img
        v-else
        src="@/assets/images/tovar.png"
        alt=""
        class="shops-new__img"
      />
    </div>
    <p class="shops-new__price">{{ card.price }}</p>
    <p class="shops-new__name">{{ card.name }}</p>
    <div class="shops-new__flex">
      <p class="shops-new__weight">1 кг</p>
      <p class="shops-new__info">850, 00 ₸</p>
    </div>
    <div @click.stop>
      <button @click="isCart = !isCart" class="shops-new__btn" v-if="!isCart">
        <IconPlus />
      </button>
      <div class="shops-new__cart" v-else>
        <button @click="count > 1 && count--" class="shops-new__cart__btn">
          <IconMinus />
        </button>
        <p class="shops-new__cart__count">{{ count }}</p>
        <button @click="count++" class="shops-new__cart__btn">
          <IconPlus />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  card: Object,
  index: Number,
});

let isCart = ref(false);
let count = ref(1);
</script>
