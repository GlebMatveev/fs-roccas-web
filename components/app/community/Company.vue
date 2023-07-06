<script setup>
// Stores
import { usePopupStore } from "@/store/popup";
const popupStore = usePopupStore();
</script>

<template>
  <section class="company">
    <div class="container">
      <div class="company__wrapper">
        <h2 class="company__title">
          {{ $t("static.community.company.title") }}
        </h2>
        <div class="company__items">
          <div class="company__items-card">
            <Icon
              name="CommunityCompany01"
              size="42"
            />
            <p class="company__items-title">
              {{ $t("static.community.company.items[0]") }}
            </p>
          </div>
          <div class="company__items-card">
            <Icon
              name="CommunityCompany02"
              size="42"
            />
            <p class="company__items-title">
              {{ $t("static.community.company.items[1]") }}
            </p>
          </div>
          <div class="company__items-card">
            <Icon
              name="CommunityCompany03"
              size="42"
            />
            <p class="company__items-title">
              {{ $t("static.community.company.items[2]") }}
            </p>
          </div>
        </div>
        <UiButtonMain
          class="company__items-button"
          :title="$t('static.community.company.button')"
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
.company {
  padding: 60px 0 60px 0;

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
      background-color: #3a3a44;
      border-radius: 20px;
      padding: 30px;
      width: 392px;
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    &-title {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 120%;
      color: #c4c4c4;
    }

    &-button {
      margin: 0 auto;
    }
  }
}

@media (max-width: 1024px) {
  .company {
    &__items {
      &-card {
        width: 100%;
      }
    }
  }
}

@media (max-width: 425px) {
  .company {
    &__title {
      font-size: 25px;
    }
  }
}
</style>
