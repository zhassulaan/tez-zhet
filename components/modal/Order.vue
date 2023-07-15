<template>
  <div
    class="modal"
    @click="$emit('modal')"
    :style="isModal ? '' : 'display:none;'"
  ></div>
  <div
    class="modal-bottom"
    :style="
      isModal ? 'transform:translateY(0%);' : 'transform:translateY(100%);'
    "
    @click.stop
  >
    <div class="modal-bottom__order">
      <div class="modal-bottom__close" @click="$emit('modal')">
        <IconX />
      </div>
      <h2>Адрес</h2>
      <div class="modal-bottom__border">
        <div class="modal-bottom__address__flex">
          <label for="address1"
            >ул. Макатаева, 127\1 / проспект Сейфуллина, 483</label
          >
          <div class="modal-bottom__address">
            <input
              type="radio"
              id="address1"
              name="address"
              style="display: none"
            />
            <label for="address1"> </label>
          </div>
        </div>
        <div class="modal-bottom__address__flex">
          <label for="address2">ул. Кабанбай батыра</label>
          <div class="modal-bottom__address">
            <input
              type="radio"
              id="address2"
              name="address"
              style="display: none"
            />
            <label for="address2"> </label>
          </div>
        </div>
      </div>
      <div class="modal-bottom__border">
        <h2>Дата доставки</h2>
        <div class="modal-bottom__date__flex">
          <div class="modal-bottom__date" v-for="i in 5" :key="i">
            <input
              type="radio"
              :id="'date' + i"
              name="date"
              style="display: none"
            />
            <label :for="'date' + i">
              <p>Сегодня</p>
              <p>27 апреля</p>
            </label>
          </div>
        </div>
        <h2 class="mb-10">Время доставки</h2>

        <div class="modal-bottom__date__flex">
          <div class="modal-bottom__time">
            <input type="radio" id="time1" name="time" style="display: none" />
            <label for="time1"> <p>09:10 - 15:00</p></label>
          </div>
        </div>
      </div>
      <div class="modal-bottom__border">
        <h2>Способы оплаты</h2>
        <div class="modal-bottom__pay">
          <label for="pay1" class="modal-bottom__pay__left">
            <IconCard />
            <p>Картой</p>
          </label>
          <div class="modal-bottom__pay__right">
            <input
              type="radio"
              id="pay1"
              name="pay"
              checked
              style="display: none"
            />
            <label for="pay1">
              <IconCheck />
            </label>
          </div>
        </div>
        <div class="modal-bottom__pay">
          <label for="pay2" class="modal-bottom__pay__left">
            <IconCash />
            <p>Наличными</p>
          </label>
          <div class="modal-bottom__pay__right">
            <input type="radio" id="pay2" name="pay" style="display: none" />
            <label for="pay2">
              <IconCheck />
            </label>
          </div>
        </div>
      </div>
      <div class="modal-bottom__bonus">
        <div class="modal-bottom__bonuses">
          <IconSmallStar />
          <h2>Потратить бонусы</h2>
        </div>
        <div class="modal-bottom__pay">
          <label for="bonus" class="modal-bottom__pay__left">
            Накоплено: 1000 b
          </label>
          <div class="modal-bottom__pay__right">
            <input
              type="checkbox"
              id="bonus"
              name="bonus"
              style="display: none"
            />
            <label for="bonus">
              <IconCheck />
            </label>
          </div>
        </div>
      </div>
      <div @click="$router.push('/')" class="modal-bottom__order__btn">
        Оформить заказ
      </div>
    </div>
  </div>
</template>

<script setup>
let count = ref(0);

defineProps({
  isModal: Boolean,
});
</script>
