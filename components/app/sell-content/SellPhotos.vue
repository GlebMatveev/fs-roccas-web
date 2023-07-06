<script setup>
// Stores
import { usePopupStore } from "@/store/popup";
const popupStore = usePopupStore();
</script>

<template>
  <section class="sell">
    <div class="container">
      <div class="sell__wrapper">
        <div class="sell__text">
          <h2 class="sell__text-title">
            {{ $t("static.sellContent.sellPhotos.title") }}
          </h2>
          <p class="sell__text-description">
            {{ $t("static.sellContent.sellPhotos.description") }}
          </p>
          <UiButtonMain
            :title="$t('static.sellContent.sellPhotos.button')"
            theme="primary"
            icon-name="ButtonArrowRight"
            icon-size="18"
            @click="popupStore.popupSignUp = true"
          />
        </div>
        <img
          src="/img/static/sell-content/sell-photos.png"
          alt="Sell content"
          class="sell__image"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.sell {
  padding: 60px 0;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  &__text {
    &-title {
      font-family: "Monument Extended";
      font-style: normal;
      font-weight: 800;
      font-size: 40px;
      line-height: 120%;
      color: #3a3a44;
      max-width: 440px;
      margin-bottom: 20px;
    }

    &-description {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 140%;
      color: #3a3a44;
      max-width: 502px;
      margin-bottom: 60px;
    }
  }
}

@media (max-width: 1024px) {
  .sell {
    &__wrapper {
      flex-wrap: wrap-reverse;
      row-gap: 30px;
    }
  }
}

@media (max-width: 425px) {
  .sell {
    &__image {
      width: 100%;
    }

    &__text {
      &-title {
        font-size: 30px;
      }
    }
  }
}
</style>
