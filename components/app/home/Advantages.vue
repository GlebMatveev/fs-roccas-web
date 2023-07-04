<template>
  <section class="advantages">
    <div class="container">
      <div class="advantages__wrapper">
        <h2 class="advantages__title">
          {{ $t("static.home.advantages.title") }}
          <span class="advantages__title-span">
            {{ $t("static.home.advantages.titleSpan") }}
          </span>
        </h2>
        <p class="advantages__description">
          {{ $t("static.home.advantages.description") }}
        </p>
        <div class="advantages__items">
          <div class="advantages__items-block">
            <Icon
              class="advantages__items-icon"
              name="HomeAdvantages01"
              size="40"
            />
            <div class="advantages__items-text">
              <h3 class="advantages__items-title">
                {{ $t("static.home.advantages.items[0].title") }}
              </h3>
              <p class="advantages__items-description">
                {{ $t("static.home.advantages.items[0].description") }}
              </p>
            </div>
          </div>
          <div class="advantages__items-block">
            <Icon
              class="advantages__items-icon"
              name="HomeAdvantages02"
              size="40"
            />
            <div class="advantages__items-text">
              <h3 class="advantages__items-title">
                {{ $t("static.home.advantages.items[1].title") }}
              </h3>
              <p class="advantages__items-description">
                {{ $t("static.home.advantages.items[1].description") }}
              </p>
            </div>
          </div>
          <div class="advantages__items-block">
            <Icon
              class="advantages__items-icon"
              name="HomeAdvantages03"
              size="40"
            />
            <div class="advantages__items-text">
              <h3 class="advantages__items-title">
                {{ $t("static.home.advantages.items[2].title") }}
              </h3>
              <p class="advantages__items-description">
                {{ $t("static.home.advantages.items[2].description") }}
              </p>
            </div>
          </div>
          <div class="advantages__items-block">
            <Icon
              class="advantages__items-icon"
              name="HomeAdvantages04"
              size="40"
            />
            <div class="advantages__items-text">
              <h3 class="advantages__items-title">
                {{ $t("static.home.advantages.items[3].title") }}
              </h3>
              <p class="advantages__items-description">
                {{ $t("static.home.advantages.items[3].description") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.advantages {
  &__wrapper {
    background-image: url("/img/static/home/advantages.png");
    background-repeat: no-repeat;
    background-position: bottom right;
    padding: 60px 0;
  }
  &__title {
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 120%;
    letter-spacing: 0.04em;
    color: #3a3a44;
    max-width: 740px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 20px;

    &-span {
      color: #dd6738;
    }
  }

  &__description {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 120%;
    color: #3a3a44;
    text-align: center;
    margin-bottom: 60px;
  }

  &__items {
    display: flex;
    flex-direction: column;
    gap: 20px;

    &-block {
      display: flex;
    }
    &-icon {
      margin-right: 20px;
    }
    &-title {
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 120%;
      color: #3a3a44;
      margin-bottom: 10px;
    }
    &-description {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #3a3a44;
      max-width: 451px;
    }
  }
}

@media (max-width: 768px) {
  .advantages {
    &__wrapper {
      background-image: none;
    }
  }
}

@media (max-width: 425px) {
  .advantages {
    &__title {
      font-size: 30px;
    }
  }
}
</style>
