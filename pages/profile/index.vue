<template>
  <header class="header py-15 px-10">
    <h2 class="text-center">Профиль</h2>
  </header>
  <section class="container">
    <div class="profile">
      <p class="profile-hello">Привет, Аза! <IconHello /></p>
      <div class="profile-avatar">
        <p>A</p>
      </div>
      <div class="profile-bonus">
        <IconSmallStar />
        <p>Мои бонусы: 1000 b</p>
      </div>
      <div @click="router.push('/profile/address')" class="profile-nav mt-10">
        <p>Адрес доставки</p>
        <IconChevron class="-rotate-90" />
      </div>
      <div @click="router.push('/profile/story')" class="profile-nav">
        <p>История заказов</p>
        <IconChevron class="-rotate-90" />
      </div>
      <div @click="router.push('/profile/cards')" class="profile-nav">
        <p>Мои карты</p>
        <IconChevron class="-rotate-90" />
      </div>
      <div @click="router.push('/profile/notification')" class="profile-nav">
        <p>Мои уведомления</p>
        <IconChevron class="-rotate-90" />
      </div>
      <div @click="router.push('/profile/favourite')" class="profile-nav">
        <p>Избранное</p>
        <IconChevron class="-rotate-90" />
      </div>
      <div @click="router.push('/profile/mark')" class="profile-nav">
        <p>Оценить приложение</p>
        <IconChevron class="-rotate-90" />
      </div>
      <div @click="router.push('/profile/stars')" class="profile-nav">
        <p>Мои оценки</p>
        <IconChevron class="-rotate-90" />
      </div>
      <div @click="router.push('/profile/language')" class="profile-nav">
        <p>Языки</p>
        <IconChevron class="-rotate-90" />
      </div>
      <div @click="router.push('/profile/support')" class="profile-nav">
        <p>Поддержка</p>
        <IconChevron class="-rotate-90" />
      </div>
    </div>
  </section>
</template>

<script setup>
const router = useRouter();
</script>
