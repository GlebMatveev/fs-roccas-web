<template>
  <section class="banner">
    <div class="container">
      <div class="banner__wrapper">
        <h1 class="banner__title">{{ $t("static.home.bannerTop.title") }}</h1>
        <p class="banner__description">
          {{ $t("static.home.bannerTop.description") }}
        </p>
        <UiInputSearch class="banner__search" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  &__wrapper {
    background-image: url("/img/static/home/banner-top.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    height: 708px;
    padding: 120px 60px 0;
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
    max-width: 650px;
    margin-bottom: 20px;
  }

  &__description {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    color: #ffffff;
    max-width: 471px;
    margin-bottom: 60px;
  }

  &__search {
    max-width: 650px;
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
    &__wrapper {
      padding-left: 30px;
      padding-right: 30px;
    }
    &__title {
      font-size: 40px;
    }
  }
}
</style>
