<template>
  <ModalDeleteCard
    :isModal="isDeleteCard"
    @modal="isDeleteCard = !isDeleteCard"
  />
  <div class="container">
    <header class="header mb-10">
      <button @click="router.go(-1)">
        <icon-chevron class="rotate-90" />
      </button>
      <h2 class="header-absolute">Мои карты</h2>
    </header>
    <section class="story">
      <div class="story-block">
        <div class="profile-cards__btn">
          <IconPlus />
          Добавить карту
        </div>
        <div class="profile-cards__one" v-for="i in 3" :key="i">
          <div class="profile-cards__block">
            <p class="profile-cards__card">Номер карты</p>
            <div class="profile-cards__flex">
              <div class="profile-cards__flex__small">
                <ul class="profile-cards__circle">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                7777
              </div>
              <img src="@/assets/images/Visa.png" alt="" class="visa" />
            </div>
            <div class="profile-address__flex mt-70">
              <input type="radio" :id="'card' + i" name="card" checked />
              <label :for="'card' + i">По умолчанию</label>
              <IconTrash @click="isDeleteCard = !isDeleteCard" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const router = useRouter();
let isDeleteCard = ref(false);
</script>
