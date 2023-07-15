<template>
  <div class="container">
    <header class="header mb-10">
      <button @click="router.go(-1)">
        <icon-chevron class="rotate-90" />
      </button>
      <h2 class="header-absolute">Поддержка</h2>
    </header>
    <section class="support">
      <div class="support-block">
        <div class="support-block__select">
          <div class="support-block__select__btn" @click="isSelect = !isSelect">
            {{ selected ? selected : "Выбрать причину" }}
            <IconChevron />
          </div>
          <div class="support-block__select__options" v-if="isSelect">
            <div
              @click="(selected = 'Не доставили заказ'), (isSelect = !isSelect)"
              class="support-block__select__option"
            >
              Не доставили заказ
            </div>
            <div
              @click="(selected = 'Не приходит код'), (isSelect = !isSelect)"
              class="support-block__select__option"
            >
              Не приходит код
            </div>
          </div>
        </div>
        <textarea
          class="support-block__textarea"
          name="comment"
          id="comment"
          cols="30"
          rows="10"
          placeholder="Написать..."
        ></textarea>
        <div class="support-block__btn">Отправить</div>
      </div>
    </section>
  </div>
</template>
<script setup>
const router = useRouter();
let isSelect = ref(false);
let selected = ref();
</script>
