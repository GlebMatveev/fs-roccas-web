<template>
  <section class="explore">
    <h2 class="explore__title">{{ $t("static.home.explore.title") }}</h2>
    <p class="explore__description">
      {{ $t("static.home.explore.description") }}
    </p>
  </section>
</template>

<style lang="scss" scoped>
.explore {
  text-align: center;
  padding: 60px 0;

  &__title {
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 120%;
    letter-spacing: 0.04em;
    color: #3a3a44;
    max-width: 900px;
    margin: 0 auto 20px;
  }
  &__description {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    color: #dd6738;
  }
}

@media (max-width: 425px) {
  .explore {
    &__title {
      font-size: 30px;
    }
  }
}
</style>
