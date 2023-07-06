<template>
  <section class="benefits">
    <div class="container">
      <h2 class="benefits__title">
        {{ $t("static.jobs.benefits.title") }}
      </h2>
      <p class="benefits__description">
        {{ $t("static.jobs.benefits.description") }}
      </p>
      <div class="benefits__items">
        <div class="benefits__items-card">
          <Icon
            name="JobsBenefits01"
            size="42"
          />
          <div class="benefits__items-text">
            <h2 class="benefits__items-title">
              {{ $t("static.jobs.benefits.items[0].title") }}
            </h2>
            <p class="benefits__items-description">
              {{ $t("static.jobs.benefits.items[0].description") }}
            </p>
          </div>
        </div>
        <div class="benefits__items-card">
          <Icon
            name="JobsBenefits02"
            size="42"
          />
          <div class="benefits__items-text">
            <h2 class="benefits__items-title">
              {{ $t("static.jobs.benefits.items[1].title") }}
            </h2>
            <p class="benefits__items-description">
              {{ $t("static.jobs.benefits.items[1].description") }}
            </p>
          </div>
        </div>
        <div class="benefits__items-card">
          <Icon
            name="JobsBenefits03"
            size="42"
          />
          <div class="benefits__items-text">
            <h2 class="benefits__items-title">
              {{ $t("static.jobs.benefits.items[2].title") }}
            </h2>
            <p class="benefits__items-description">
              {{ $t("static.jobs.benefits.items[2].description") }}
            </p>
          </div>
        </div>
        <div class="benefits__items-card">
          <Icon
            name="JobsBenefits04"
            size="42"
          />
          <div class="benefits__items-text">
            <h2 class="benefits__items-title">
              {{ $t("static.jobs.benefits.items[3].title") }}
            </h2>
            <p class="benefits__items-description">
              {{ $t("static.jobs.benefits.items[3].description") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.benefits {
  &__wrapper {
    padding: 90px 0;
  }
  &__title {
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 120%;
    color: #3a3a44;
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
    flex-wrap: wrap;
    justify-content: space-between;

    &-card {
      display: flex;
      gap: 20px;
    }
    &-title {
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 120%;
      color: #3a3a44;
      margin-bottom: 10px;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      max-width: 515px;
    }
    &-description {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #3a3a44;
      min-height: 96px;
      max-width: 515px;
      margin-bottom: 40px;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
}

@media (max-width: 425px) {
  .benefits {
    &__title {
      font-size: 40px;
    }
  }
}
</style>
