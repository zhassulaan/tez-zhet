<template>
  <section class="small">
    <h2>Категории</h2>
    <div class="small-overflow">
      <div class="small-list">
        <div
          @click="$router.push('/category/restaurants/cat/1')"
          class="small-list__one"
        >
          <div>
            <img
              src="@/assets/images/cat3.png"
              alt=""
              class="small-list__img"
            />

            <div class="small-list__block">
              <p class="small-list__text">Завтрак</p>

              <p class="small-list__count">110 заведений</p>
            </div>
          </div>
        </div>
        <div
          @click="$router.push('/category/restaurants/cat/1')"
          class="small-list__one"
        >
          <div>
            <img
              src="@/assets/images/cat4.png"
              alt=""
              class="small-list__img"
            />

            <div class="small-list__block">
              <p class="small-list__text">Бургер</p>

              <p class="small-list__count">110 заведений</p>
            </div>
          </div>
        </div>
        <div
          @click="$router.push('/category/restaurants/cat/1')"
          class="small-list__one"
        >
          <div>
            <img
              src="@/assets/images/cat5.png"
              alt=""
              class="small-list__img"
            />

            <div class="small-list__block">
              <p class="small-list__text">Супы</p>

              <p class="small-list__count">110 заведений</p>
            </div>
          </div>
        </div>
        <div
          @click="$router.push('/category/restaurants/cat/1')"
          class="small-list__one"
        >
          <div>
            <img
              src="@/assets/images/evrei.png"
              alt=""
              class="small-list__img"
            />
            <div class="small-list__block">
              <p class="small-list__text">Еврейская</p>

              <p class="small-list__count">110 заведений</p>
            </div>
          </div>
        </div>
        <div
          @click="$router.push('/category/restaurants/cat/1')"
          class="small-list__one"
        >
          <div>
            <img
              src="@/assets/images/cat3.png"
              alt=""
              class="small-list__img"
            />

            <div class="small-list__block">
              <p class="small-list__text">Завтрак</p>

              <p class="small-list__count">110 заведений</p>
            </div>
          </div>
        </div>
        <div
          @click="$router.push('/category/restaurants/cat/1')"
          class="small-list__one"
        >
          <div>
            <img
              src="@/assets/images/cat4.png"
              alt=""
              class="small-list__img"
            />

            <div class="small-list__block">
              <p class="small-list__text">Бургер</p>

              <p class="small-list__count">110 заведений</p>
            </div>
          </div>
        </div>
        <div
          @click="$router.push('/category/restaurants/cat/1')"
          class="small-list__one"
        >
          <div>
            <img
              src="@/assets/images/cat5.png"
              alt=""
              class="small-list__img"
            />

            <div class="small-list__block">
              <p class="small-list__text">Супы</p>

              <p class="small-list__count">110 заведений</p>
            </div>
          </div>
        </div>
        <div
          @click="$router.push('/category/restaurants/cat/1')"
          class="small-list__one"
        >
          <div>
            <img
              src="@/assets/images/evrei.png"
              alt=""
              class="small-list__img"
            />
            <div class="small-list__block">
              <p class="small-list__text">Еврейская</p>

              <p class="small-list__count">110 заведений</p>
            </div>
          </div>
        </div>
        <div
          @click="$router.push('/category/restaurants/cat/1')"
          class="small-list__one"
        >
          <div>
            <img
              src="@/assets/images/cat3.png"
              alt=""
              class="small-list__img"
            />

            <div class="small-list__block">
              <p class="small-list__text">Завтрак</p>

              <p class="small-list__count">110 заведений</p>
            </div>
          </div>
        </div>
        <div
          @click="$router.push('/category/restaurants/cat/1')"
          class="small-list__one"
        >
          <div>
            <img
              src="@/assets/images/cat4.png"
              alt=""
              class="small-list__img"
            />

            <div class="small-list__block">
              <p class="small-list__text">Бургер</p>

              <p class="small-list__count">110 заведений</p>
            </div>
          </div>
        </div>
        <div
          @click="$router.push('/category/restaurants/cat/1')"
          class="small-list__one"
        >
          <div>
            <img
              src="@/assets/images/cat5.png"
              alt=""
              class="small-list__img"
            />

            <div class="small-list__block">
              <p class="small-list__text">Супы</p>

              <p class="small-list__count">110 заведений</p>
            </div>
          </div>
        </div>
        <div
          @click="$router.push('/category/restaurants/cat/1')"
          class="small-list__one"
        >
          <div>
            <img
              src="@/assets/images/evrei.png"
              alt=""
              class="small-list__img"
            />
            <div class="small-list__block">
              <p class="small-list__text">Еврейская</p>

              <p class="small-list__count">110 заведений</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      @click="router.push('/category/list?shop=' + !!(name === 'Магазины'))"
      class="small-category__btn"
    >
      Смотреть все
      <icon-chevron class="-rotate-90" />
    </button>
  </section>
</template>

<script setup>
const router = useRouter();
defineProps({
  name: String,
});
</script>
