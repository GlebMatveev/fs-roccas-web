<template>
  <section class="banner">
    <div class="container">
      <div class="banner__wrapper">
        <h1 class="banner__title">
          {{ $t("static.community.bannerTop.title") }}
        </h1>
        <p class="banner__description">
          {{ $t("static.community.bannerTop.description") }}
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  &__wrapper {
    background-image: url("/img/static/community/banner-top.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    height: 560px;
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
    max-width: 764px;
    margin-bottom: 20px;
  }

  &__description {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    color: #ffffff;
    max-width: 471px;
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
      font-size: 30px;
    }
  }
}
</style>
