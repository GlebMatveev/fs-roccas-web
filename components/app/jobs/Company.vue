<script setup>
// Stores
import { usePopupStore } from "@/store/popup";
const popupStore = usePopupStore();
</script>

<template>
  <section class="company">
    <div class="container">
      <div class="company__wrapper">
        <div class="company__text">
          <h2 class="company__text-title">
            {{ $t("static.jobs.company.title") }}
          </h2>
          <p class="company__text-description">
            {{ $t("static.jobs.company.description") }}
          </p>
          <UiButtonMain
            :title="$t('static.jobs.company.button')"
            theme="primary"
            icon-name="ButtonArrowRight"
            icon-size="18"
            @click="popupStore.popupSignUp = true"
          />
        </div>
        <img
          src="/img/static/jobs/company.png"
          alt="Company"
          class="company__image"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.company {
  padding-top: 60px;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap-reverse;
    row-gap: 30px;
    padding: 60px;
    background: rgba(243, 243, 243, 0.8);
    backdrop-filter: blur(15px);
    border-radius: 30px;
  }

  &__text {
    max-width: 471px;

    &-title {
      font-style: normal;
      font-weight: 800;
      font-size: 32px;
      line-height: 120%;
      color: #3a3a44;
      margin-bottom: 20px;
    }

    &-description {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      color: #3a3a44;
      margin-bottom: 60px;
    }
  }

  &__image {
    border-bottom: 4px solid #dd6738;
    filter: drop-shadow(0px 4px 16px rgba(91, 91, 91, 0.24));
    border-radius: 20px;
  }
}

@media (max-width: 425px) {
  .company {
    &__image {
      width: 100%;
    }
  }
}
</style>
