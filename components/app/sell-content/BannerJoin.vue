<script setup>
// Stores
import { usePopupStore } from "@/store/popup";
const popupStore = usePopupStore();
</script>

<template>
  <section class="banner">
    <div class="container">
      <div class="banner__wrapper">
        <h2 class="banner__title">
          {{ $t("static.sellContent.bannerJoin.title") }}
        </h2>
        <UiButtonMain
          class="banner__button"
          :title="$t('static.sellContent.bannerJoin.button')"
          theme="primary"
          icon-name="ButtonArrowRight"
          icon-size="18"
          @click="popupStore.popupSignUp = true"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  &__wrapper {
    background-image: url("/img/static/sell-content/banner-join.png");
    background-size: cover;
    padding: 60px;
    border-radius: 30px;
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 120%;
    text-align: center;
    letter-spacing: 0.04em;
    color: #ffffff;
    margin-bottom: 60px;
  }

  &__button {
    margin: 0 auto;
  }
}

@media (max-width: 1024px) {
  .banner {
    &__wrapper {
      background-size: cover;
    }
  }
}

@media (max-width: 425px) {
  .banner {
    &__title {
      font-size: 25px;
    }
  }
}
</style>
