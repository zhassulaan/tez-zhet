<template>
  <section class="news">
    <h2>Новости</h2>
    <div class="news-list">
      <div class="news-list__box" v-for="i in 3" :key="i">
        <div class="news-list__big" @click="$router.push('/news/1')">
          <img
            src="@/assets/images/news1.png"
            alt=""
            class="news-list__big__img"
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
        <div class="news-list__smalls">
          <div class="news-list__small" @click="$router.push('/news/1')">
            <img
              src="@/assets/images/news2.png"
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
          <div class="news-list__small" @click="$router.push('/news/1')">
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
    </div>
  </section>
</template>
