<template>
  <header class="news-header">
    <div class="restaurants-header__flex">
      <button @click="$router.go(-1)" class="restaurants-header__btn">
        <icon-chevron class="rotate-90 -ml-2" />
      </button>
    </div>
    <img src="@/assets/images/newsPage.png" alt="" class="news-header__img" />
    <div class="news-header__bottom">
      <p class="news-header__text">
        Восемь новых ресторанов и баров по всему Люксу
      </p>
    </div>
  </header>
  <div class="container">
    <section class="news">
      <div class="news-date">
        <IconCalendar />
        <p class="news-date__text">27 апреля 2023</p>
      </div>
      <p class="news-text">
        Семейство Fin Gourmand растет Долгое время это было под вопросом, но
        теперь это точно: шеф-повар Николя Зеле и его жена Полина берут на себя
        семейный ресторан на Route d'Esch, Fin Gourmand.
      </p>
      <img src="@/assets/images/newsPage1.png" alt="" class="news-image" />
      <p class="news-text">
        Семейство Fin Gourmand растет Долгое время это было под вопросом, но
        теперь это точно: шеф-повар Николя Зеле и его жена Полина берут на себя
        семейный ресторан на Route d'Esch, Fin Gourmand.
      </p>
      <h2>Другие новости</h2>
      <div class="news-list">
        <div class="news-list__box" v-for="i in 3" :key="i">
          <div class="news-list__small" @click="$router.push('/news/3')">
            <img
              src="@/assets/images/news3.png"
              alt=""
              class="news-list__small__img"
            />
            <div class="news-list__footer">
              <div class="news-list__line">
                <p class="news-list__date">18 апреля 2023</p>
              </div>
              <p class="news-list__text">
                10 ресторанов с эпическими коллекциями произведений искусства
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
