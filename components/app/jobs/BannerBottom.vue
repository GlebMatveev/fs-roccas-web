<script setup>
// Stores
import { usePopupStore } from "@/store/popup";
const popupStore = usePopupStore();
</script>

<template>
  <section class="banner">
    <div class="container">
      <div class="banner__wrapper">
        <div class="banner__text">
          <h2 class="banner__title">
            {{ $t("static.jobs.bannerBottom.title") }}
          </h2>
          <Icon
            name="JobsShieldCheck"
            size="42"
          />
        </div>
        <p class="banner__description">
          {{ $t("static.jobs.bannerBottom.description") }}
        </p>
        <UiButtonMain
          :title="$t('static.jobs.bannerBottom.button')"
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
  padding: 60px 0;

  &__wrapper {
    background-image: url("/img/static/jobs/banner-bottom.png");
    background-size: cover;
    padding: 60px;
    border-radius: 30px;
  }

  &__text {
    display: flex;
    gap: 20px;
  }

  &__title {
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 120%;
    letter-spacing: 0.04em;
    color: #ffffff;
    max-width: 620px;
    margin-bottom: 20px;
  }

  &__description {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    color: #ffffff;
    max-width: 714px;
    margin-bottom: 60px;
  }
}

@media (max-width: 768px) {
  .banner {
    &__wrapper {
      background-size: cover;
    }
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
