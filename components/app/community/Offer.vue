<script setup>
// Stores
import { usePopupStore } from "@/store/popup";
const popupStore = usePopupStore();
</script>

<template>
  <section class="offer">
    <div class="container">
      <div class="offer__wrapper">
        <h2 class="offer__title">
          {{ $t("static.community.offer.title") }}
        </h2>
        <div class="offer__items">
          <div class="offer__items-card">
            <p class="offer__items-title">
              {{ $t("static.community.offer.items[0]") }}
            </p>
            <Icon
              name="CommunityOffer01"
              size="32"
            />
          </div>
          <div class="offer__items-card">
            <p class="offer__items-title">
              {{ $t("static.community.offer.items[1]") }}
            </p>
            <Icon
              name="CommunityOffer02"
              size="32"
            />
          </div>
          <div class="offer__items-card">
            <p class="offer__items-title">
              {{ $t("static.community.offer.items[2]") }}
            </p>
            <Icon
              name="CommunityOffer03"
              size="32"
            />
          </div>
        </div>
        <UiButtonMain
          class="offer__items-button"
          :title="$t('static.community.offer.button')"
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
.offer {
  padding: 90px 0 50px 0;

  &__wrapper {
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
    color: #3a3a44;
    margin: 0 auto 40px;
  }

  &__items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 60px;
    row-gap: 20px;

    &-card {
      display: flex;
      justify-content: space-between;
      background-color: #3a3a44;
      border-radius: 20px;
      padding: 30px;
      width: 392px;
      min-height: 88px;
    }

    &-title {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 150%;
      color: #ffffff;
    }

    &-button {
      margin: 0 auto;
    }
  }
}

@media (max-width: 1024px) {
  .offer {
    &__items {
      &-card {
        width: 100%;
      }
    }
  }
}

@media (max-width: 425px) {
  .offer {
    &__title {
      font-size: 25px;
    }
  }
}
</style>
