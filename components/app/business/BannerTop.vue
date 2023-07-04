<template>
  <section class="banner">
    <div class="container">
      <div class="banner__wrapper">
        <h1 class="banner__title">
          {{ $t("static.business.bannerTop.title") }}
        </h1>
        <p class="banner__subtitle">
          {{ $t("static.business.bannerTop.subtitle") }}
        </p>
        <p class="banner__description">
          {{ $t("static.business.bannerTop.description[0]") }}
        </p>
        <p class="banner__description">
          {{ $t("static.business.bannerTop.description[1]") }}
        </p>
        <UiButtonMain
          class="banner__button"
          :title="$t('static.business.bannerTop.button')"
          theme="primary"
          icon-name="ButtonArrowRight"
          icon-size="18"
          to="/submit-a-request"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  &__wrapper {
    background-image: url("/img/static/business/banner-top.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    height: 588px;
    padding: 60px 60px 0;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 120%;
    letter-spacing: 0.04em;
    color: #ffffff;
    max-width: 550px;
    margin-bottom: 20px;
  }

  &__subtitle {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 140%;
    color: #dd6738;
    margin-bottom: 40px;
  }

  &__description {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    color: #ffffff;
    max-width: 568px;
    margin-bottom: 10px;
  }

  &__button {
    margin-top: 60px;
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
    &__wrapper {
      padding-left: 30px;
      padding-right: 30px;
    }
    &__title {
      font-size: 25px;
    }
    &__subtitle {
      font-size: 16px;
    }
    &__description {
      font-size: 16px;
    }
  }
}
</style>
