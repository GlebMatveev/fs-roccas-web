<template>
  <section class="why">
    <div class="container">
      <div class="why__wrapper">
        <h2 class="why__title">
          {{ $t("static.sellContent.why.title") }}
        </h2>
        <div class="why__items">
          <div class="why__items-card">
            <Icon
              name="SellContentWhy01"
              size="42"
            />
            <h3 class="why__items-title">
              {{ $t("static.sellContent.why.items[0].title") }}
            </h3>
            <p class="why__items-description">
              {{ $t("static.sellContent.why.items[0].description") }}
            </p>
          </div>
          <div class="why__items-card">
            <Icon
              name="SellContentWhy02"
              size="42"
            />
            <h3 class="why__items-title">
              {{ $t("static.sellContent.why.items[1].title") }}
            </h3>
            <p class="why__items-description">
              {{ $t("static.sellContent.why.items[1].description") }}
            </p>
          </div>
          <div class="why__items-card">
            <Icon
              name="SellContentWhy03"
              size="42"
            />
            <h3 class="why__items-title">
              {{ $t("static.sellContent.why.items[2].title") }}
            </h3>
            <p class="why__items-description">
              {{ $t("static.sellContent.why.items[2].description") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.why {
  padding: 90px 0 60px 0;

  &__title {
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 120%;
    color: #3a3a44;
    max-width: 1007px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 40px;
  }

  &__items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    &-card {
      background: #3a3a44;
      box-shadow: 0px 4px 32px #f3f5f5;
      border-radius: 20px;
      padding: 30px;
      max-width: 396px;
    }
    &-title {
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 120%;
      color: #ffffff;
      margin-top: 30px;
      margin-bottom: 5px;
    }
    &-description {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      color: #c4c4c4;
    }
  }
}

@media (max-width: 1024px) {
  .why {
    &__items {
      row-gap: 15px;
      &-card {
        max-width: none;
        width: 100%;
      }
    }
  }
}

@media (max-width: 425px) {
  .why {
    &__title {
      font-size: 30px;
    }
  }
}
</style>
