<template>
  <section class="millions">
    <div class="container">
      <div class="millions__wrapper">
        <h2 class="millions__title">{{ $t("static.about.millions.title") }}</h2>
        <p class="millions__description">
          {{ $t("static.about.millions.description") }}
        </p>
        <div class="millions__items">
          <div class="millions__items-card">
            <h3 class="millions__items-title">
              {{ $t("static.about.millions.items[0].title") }}
            </h3>
            <p class="millions__items-subtitle">
              {{ $t("static.about.millions.items[0].subtitle") }}
            </p>
          </div>
          <div class="millions__items-card">
            <h3 class="millions__items-title">
              {{ $t("static.about.millions.items[1].title") }}
            </h3>
            <p class="millions__items-subtitle">
              {{ $t("static.about.millions.items[1].subtitle") }}
            </p>
          </div>
          <div class="millions__items-card">
            <h3 class="millions__items-title">
              {{ $t("static.about.millions.items[2].title") }}
            </h3>
            <p class="millions__items-subtitle">
              {{ $t("static.about.millions.items[2].subtitle") }}
            </p>
          </div>
          <div class="millions__items-card">
            <h3 class="millions__items-title">
              {{ $t("static.about.millions.items[3].title") }}
            </h3>
            <p class="millions__items-subtitle">
              {{ $t("static.about.millions.items[3].subtitle") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.millions {
  &__title {
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 120%;
    color: #3a3a44;
    text-align: center;
    max-width: 908px;
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
    margin-bottom: 40px;
  }

  &__items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 10px;

    &-card {
      background-color: #3a3a44;
      border-radius: 20px;
      padding: 25px 25px 20px;
      min-width: 292px;
    }
    &-title {
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 24px;
      color: #ffffff;
      margin-bottom: 10px;
    }
    &-subtitle {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 140%;
      color: #c4c4c4;
    }
  }
}

@media (max-width: 1024px) {
  .millions {
    &__items {
      &-card {
        min-width: 100%;
      }
    }
  }
}

@media (max-width: 425px) {
  .millions {
    &__title {
      font-size: 30px;
    }
  }
}
</style>
