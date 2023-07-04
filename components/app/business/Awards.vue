<template>
  <section class="awards">
    <div class="container">
      <div class="awards__wrapper">
        <h2 class="awards__title">
          {{ $t("static.business.awards.title") }}
        </h2>
        <p class="awards__description">
          {{ $t("static.business.awards.description") }}
        </p>
        <div class="awards__items">
          <img
            src="/img/static/business/awards-01.png"
            alt="Awards"
            class="awards__items-image"
          />
          <img
            src="/img/static/business/awards-02.png"
            alt="Awards"
            class="awards__items-image"
          />
          <img
            src="/img/static/business/awards-03.png"
            alt="Awards"
            class="awards__items-image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.awards {
  &__wrapper {
    padding-bottom: 60px;
  }
  &__title {
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 120%;
    color: #3a3a44;
    max-width: 649px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  &__description {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    color: #dd6738;
    text-align: center;
    max-width: 750px;
    margin: 0 auto;
    margin-bottom: 40px;
  }

  &__items {
    display: flex;
    justify-content: center;
    gap: 200px;
    align-items: center;

    &-image {
      height: 100%;
    }
  }
}

@media (max-width: 1024px) {
  .awards {
    &__items {
      gap: 100px;
    }
  }
}

@media (max-width: 425px) {
  .awards {
    &__title {
      font-size: 25px;
    }
    &__items {
      flex-direction: column;
    }
  }
}
</style>
