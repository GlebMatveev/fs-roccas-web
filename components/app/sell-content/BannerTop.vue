<script setup>
// Stores
import { usePopupStore } from "@/store/popup";
const popupStore = usePopupStore();
</script>

<template>
  <section class="banner">
    <div class="container">
      <div class="banner__wrapper">
        <h1 class="banner__title">
          {{ $t("static.sellContent.bannerTop.title") }}
        </h1>
        <p class="banner__description">
          {{ $t("static.sellContent.bannerTop.description") }}
        </p>
        <div class="banner__items">
          <div class="banner__items-card">
            <Icon
              class="banner__items-icon"
              name="SellContentTop01"
              size="40"
            />
            <p class="banner__items-description">
              {{ $t("static.sellContent.bannerTop.items[0]") }}
            </p>
          </div>
          <div class="banner__items-card">
            <Icon
              class="banner__items-icon"
              name="SellContentTop02"
              size="40"
            />
            <p class="banner__items-description">
              {{ $t("static.sellContent.bannerTop.items[1]") }}
            </p>
          </div>
          <div class="banner__items-card">
            <Icon
              class="banner__items-icon"
              name="SellContentTop03"
              size="40"
            />
            <p class="banner__items-description">
              {{ $t("static.sellContent.bannerTop.items[2]") }}
            </p>
          </div>
        </div>
        <UiButtonMain
          :title="$t('static.sellContent.bannerTop.button')"
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
    background-image: url("/img/static/sell-content/banner-top.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    height: 650px;
    padding: 60px;
    border-radius: 30px;
  }

  &__title {
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 120%;
    letter-spacing: 0.04em;
    color: #ffffff;
    max-width: 873px;
    margin-bottom: 20px;
  }

  &__description {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    color: #ffffff;
    max-width: 471px;
    margin-bottom: 40px;
  }

  &__items {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 60px;

    &-card {
      display: flex;
      gap: 20px;
    }

    &-description {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #ffffff;
      max-width: 451px;
    }
  }
}

@media (max-width: 1024px) {
  .banner {
    &__wrapper {
      background-size: cover;
    }
  }
}

@media (max-width: 768px) {
  .banner {
    &__title {
      font-size: 40px;
    }
  }
}

@media (max-width: 425px) {
  .banner {
    &__wrapper {
      padding-left: 30px;
      padding-right: 30px;
    }

    &__title {
      font-size: 25px;
    }

    &__description {
      font-size: 16px;
    }

    &__items {
      &-description {
        width: 300px;
      }
    }
  }
}
</style>
