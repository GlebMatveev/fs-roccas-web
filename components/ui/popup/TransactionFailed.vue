<script setup>
// Props
const props = defineProps({
  show: Boolean,
});

// Emits
const emit = defineEmits(["close"]);
</script>

<template>
  <div
    v-if="show"
    class="modal__overlay"
  >
    <div class="modal">
      <div class="modal__form">
        <h2 class="modal__title">
          {{ $t("popupTransactionFailed.title") }}
        </h2>
        <p class="modal__description">
          {{ $t("popupTransactionFailed.description") }}
        </p>
        <UiButtonMain
          class="modal__button"
          theme="primary"
          width="100%"
          :title="$t('popupTransactionFailed.button')"
          @click="emit('close')"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  width: 510px;
  height: 210px;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 20px;
  margin-top: 5%;
  margin-left: 1%;

  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 135%;
    color: #3a3a44;
    margin-bottom: 10px;
  }

  &__description {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #3a3a44;
    margin-bottom: 20px;
  }

  &__button {
    width: 100%;
  }

  &__overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background: rgba(58, 58, 68, 0.4);
    backdrop-filter: blur(6px);
    z-index: 5;
  }
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}

@media (max-width: 425px) {
  .modal {
    width: 90%;

    &__overlay {
      left: 0px;
    }
  }
}
</style>
