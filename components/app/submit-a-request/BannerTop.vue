<template>
  <section class="banner">
    <div class="container">
      <div class="banner__wrapper">
        <h2 class="banner__title">
          {{ $t("static.submitARequest.title") }}
        </h2>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  padding-bottom: 60px;

  &__wrapper {
    background-image: url("/img/static/submit-a-request/banner-top.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    height: 402px;
    padding: 120px 0 0 0;
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
    text-align: center;
  }
}

@media (max-width: 1024px) {
  .banner {
    &__wrapper {
      background-size: cover;
    }
  }
}
</style>
