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
          {{ $t("static.home.bannerBottom.title") }}
          <span class="banner__title-span">{{
            $t("static.home.bannerBottom.titleSpan")
          }}</span>
        </h2>
        <p class="banner__description">
          {{ $t("static.home.bannerBottom.description") }}
        </p>
        <UiButtonMain
          :title="$t('static.home.bannerBottom.button')"
          theme="primary"
          @click="popupStore.popupSignUp = true"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  padding: 60px 0;

  &__wrapper {
    background-image: url("/img/static/home/banner-bottom.png");
    background-size: cover;
    padding: 60px;
    border-radius: 30px;
  }

  &__title {
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 120%;
    letter-spacing: 0.04em;
    color: #ffffff;
    max-width: 574px;
    margin-bottom: 20px;

    &-span {
      color: #dd6738;
    }
  }

  &__description {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    color: #ffffff;
    max-width: 467px;
    margin-bottom: 60px;
  }
}

@media (max-width: 425px) {
  .banner {
    &__wrapper {
      background-size: cover;
    }

    &__title {
      font-size: 30px;
    }
  }
}
</style>
