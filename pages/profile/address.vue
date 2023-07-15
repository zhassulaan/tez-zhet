<template>
  <ModalAddAddress
    :isModal="isAddAddress"
    @modal="isAddAddress = !isAddAddress"
  />
  <ModalEditAddress
    :isModal="isChangeAddress"
    @modal="isChangeAddress = !isChangeAddress"
  />
  <ModalDeleteAddress
    :isModal="isDeleteAddress"
    @modal="isDeleteAddress = !isDeleteAddress"
  />
  <div class="container">
    <header class="header mb-10">
      <button @click="$router.go(-1)">
        <icon-chevron class="rotate-90" />
      </button>
      <h2 class="header-absolute">Адрес доставки</h2>
    </header>
    <section class="profile">
      <div @click="isAddAddress = !isAddAddress" class="profile-address__btn">
        <IconPlus />
        Добавить адрес
      </div>
      <div class="profile-address__one">
        <div class="profile-address__flex">
          <p>ул. Макатаева, 127\1 / проспект Сейфуллина, 483</p>
          <IconTrash @click="isDeleteAddress = !isDeleteAddress" />
        </div>
        <p class="my-15">Дом 15</p>
        <div class="profile-address__flex">
          <input type="radio" id="address1" name="address" checked />
          <label for="address1">По умолчанию</label>
          <IconPen @click="isChangeAddress = !isChangeAddress" />
        </div>
      </div>
      <div class="profile-address__one">
        <div class="profile-address__flex">
          <p>ул. Макатаева, 127\1 / проспект Сейфуллина, 483</p>
          <IconTrash @click="isDeleteAddress = !isDeleteAddress" />
        </div>
        <p class="my-15">Дом 15</p>
        <div class="profile-address__flex">
          <input type="radio" id="address2" name="address" />
          <label for="address2">По умолчанию</label>
          <IconPen @click="isChangeAddress = !isChangeAddress" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
let isAddAddress = ref(false);
let isChangeAddress = ref(false);
let isDeleteAddress = ref(false);
</script>
