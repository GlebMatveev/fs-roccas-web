<template>
  <section class="origins">
    <div class="container">
      <div class="origins__wrapper">
        <div class="origins__text">
          <h2 class="origins__text-title">
            {{ $t("static.about.origins.title") }}
          </h2>
          <p class="origins__text-description">
            {{ $t("static.about.origins.description[0]") }}
          </p>
          <p class="origins__text-description">
            {{ $t("static.about.origins.description[1]") }}
          </p>
          <p class="origins__text-description">
            {{ $t("static.about.origins.description[2]") }}
          </p>
        </div>
        <img
          class="origins__image"
          src="/img/static/about/origins.png"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.origins {
  padding: 60px 0;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__text {
    max-width: 555px;

    &-title {
      font-style: normal;
      font-weight: 800;
      font-size: 32px;
      line-height: 120%;
      color: #3a3a44;
      max-width: 279px;
      margin-bottom: 20px;
    }
    &-description {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      color: #3a3a44;
      margin-bottom: 20px;
    }
  }

  &__image {
    border-bottom: 4px solid #dd6738;
    border-radius: 30px;
  }
}

@media (max-width: 1024px) {
  .origins {
    &__text {
      max-width: 100%;
      &-title {
        max-width: 100%;
      }
    }
    &__image {
      width: 100%;
    }
  }
}
</style>
