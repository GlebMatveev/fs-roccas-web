<template>
  <section class="unlock">
    <div class="container">
      <div class="unlock__wrapper">
        <h2 class="unlock__title">{{ $t("static.home.unlock.title") }}</h2>
        <p class="unlock__description">
          {{ $t("static.home.unlock.description") }}
        </p>
        <div class="unlock__cards">
          <div class="unlock__cards-item">
            <img
              src="/img/static/home/unlock-01.png"
              alt=""
              class="unlock__cards-image"
            />
            <h3 class="unlock__cards-title">
              {{ $t("static.home.unlock.cards[0].title") }}
            </h3>
            <p class="unlock__cards-subtitle">
              {{ $t("static.home.unlock.cards[0].subtitle") }}
            </p>
          </div>
          <div class="unlock__cards-item">
            <img
              src="/img/static/home/unlock-02.png"
              alt=""
              class="unlock__cards-image"
            />
            <h3 class="unlock__cards-title">
              {{ $t("static.home.unlock.cards[1].title") }}
            </h3>
            <p class="unlock__cards-subtitle">
              {{ $t("static.home.unlock.cards[1].subtitle") }}
            </p>
          </div>
          <div class="unlock__cards-item">
            <img
              src="/img/static/home/unlock-03.png"
              alt=""
              class="unlock__cards-image"
            />
            <h3 class="unlock__cards-title">
              {{ $t("static.home.unlock.cards[2].title") }}
            </h3>
            <p class="unlock__cards-subtitle">
              {{ $t("static.home.unlock.cards[2].subtitle") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.unlock {
  padding: 60px 0;

  &__wrapper {
    background-color: #f3f3f3;
    border-radius: 30px;
    padding: 40px;
  }

  &__title {
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 120%;
    letter-spacing: 0.04em;
    color: #3a3a44;
    margin-bottom: 20px;
  }

  &__description {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    color: #3a3a44;
    margin-bottom: 40px;
    max-width: 655px;
  }

  &__cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 20px;

    &-item {
      max-width: 370px;
      background-color: #ffffff;
      border-radius: 30px;
      padding: 20px;
    }

    &-image {
      width: 100%;
      margin-bottom: 20px;
    }
    &-title {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 120%;
      color: #3a3a44;
      margin-bottom: 10px;
      margin-left: 4px;
    }
    &-subtitle {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 120%;
      color: #c4c4c4;
      margin-left: 4px;
    }
  }
}

@media (max-width: 1024px) {
  .unlock {
    &__cards {
      &-item {
        max-width: none;
        width: 32%;
      }
    }
  }
}

@media (max-width: 425px) {
  .unlock {
    &__title {
      font-size: 30px;
    }

    &__cards {
      &-item {
        width: 100%;
      }
    }
  }
}
</style>
