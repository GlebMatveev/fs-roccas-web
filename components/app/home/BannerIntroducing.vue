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
          {{ $t("static.home.bannerIntroducing.title") }}
        </h2>
        <p class="banner__description">
          {{ $t("static.home.bannerIntroducing.description") }}
        </p>
        <UiButtonMain
          :title="$t('static.home.bannerIntroducing.button')"
          theme="primary"
          @click="popupStore.popupSignUp = true"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  padding-top: 90px;

  &__wrapper {
    background-image: url("/img/static/home/banner-introducing.png");
    background-size: cover;
    padding: 60px;
    border-radius: 30px;
  }

  &__title {
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 120%;
    letter-spacing: 0.04em;
    color: #ffffff;
    margin-bottom: 20px;
    max-width: 650px;
  }

  &__description {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    color: #ffffff;
    margin-bottom: 60px;
  }
}

@media (max-width: 425px) {
  .banner {
    &__title {
      font-size: 30px;
    }
  }
}
</style>
