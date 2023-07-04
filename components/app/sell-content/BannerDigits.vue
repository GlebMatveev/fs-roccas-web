<template>
  <section class="banner">
    <div class="container">
      <div class="banner__wrapper">
        <h2 class="banner__title">
          {{ $t("static.sellContent.bannerDigits.title") }}
        </h2>

        <div class="banner__items">
          <div class="banner__items-card">
            <p class="banner__items-title">
              {{ $t("static.sellContent.bannerDigits.items[0].title") }}
            </p>
            <p class="banner__items-subtitle">
              {{ $t("static.sellContent.bannerDigits.items[0].subtitle") }}
            </p>
          </div>
          <div class="banner__items-card">
            <p class="banner__items-title">
              {{ $t("static.sellContent.bannerDigits.items[1].title") }}
            </p>
            <p class="banner__items-subtitle">
              {{ $t("static.sellContent.bannerDigits.items[1].subtitle") }}
            </p>
          </div>
          <div class="banner__items-card">
            <p class="banner__items-title">
              {{ $t("static.sellContent.bannerDigits.items[2].title") }}
            </p>
            <p class="banner__items-subtitle">
              {{ $t("static.sellContent.bannerDigits.items[2].subtitle") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  padding: 40px 0 60px 0;

  &__wrapper {
    background-image: url("/img/static/sell-content/banner-digits.png");
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
    max-width: 406px;
    margin-bottom: 40px;
  }

  &__items {
    display: flex;
    gap: 15px;

    &-card {
      padding: 25px 25px 20px 25px;
      background-color: #464653;
      backdrop-filter: blur(15px);
      border-radius: 10px;
      width: 216px;
    }
    &-title {
      font-family: "Monument Extended";
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 24px;
      color: #ffffff;
      margin-bottom: 5px;
    }
    &-subtitle {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #ffffff;
    }
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
      font-size: 25px;
    }

    &__items {
      flex-direction: column;

      &-card {
        width: 100%;
      }
    }
  }
}
</style>
