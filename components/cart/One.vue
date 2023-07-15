<template>
  <div class="cart-items__one">
    <div class="cart-items__flex">
      <img src="@/assets/images/Aldick.jpg" alt="" class="cart-items__img" />
      <div class="cart-items__info">
        <p class="cart-items__name">Пахлава</p>
        <p class="cart-items__price">850, 00 ₸</p>
        <p class="cart-items__text">
          7 мини-пирожных из песочной крошки, вареной сгущенки и грецких орехов
        </p>
      </div>
      <div @click="console.log('trash')" class="cart-items__trash">
        <IconTrash />
      </div>
    </div>
    <div class="shops-new__cart cart-items__btn">
      <div @click="count > 1 && count--" class="shops-new__cart__btn">
        <IconMinus />
      </div>
      <p class="shops-new__cart__count">{{ count }}</p>
      <div @click="count++" class="shops-new__cart__btn">
        <IconPlus />
      </div>
    </div>
  </div>
</template>

<script setup>
let count = ref(0);
</script>
