<template>
  <div>
    <ModalMark :isModal="isMark" @modal="isMark = !isMark" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
let isMark = ref(false);
const route = useRoute();
if (route.query.modal) {
  isMark.value = true;
}
</script>
