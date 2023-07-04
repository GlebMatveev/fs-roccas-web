<template>
  <section class="api">
    <div class="container">
      <div class="api__wrapper">
        <div class="api__text">
          <h2 class="api__text-title">
            {{ $t("static.business.api.title") }}
          </h2>
          <p class="api__text-description">
            {{ $t("static.business.api.description") }}
          </p>
        </div>
        <div class="api__items">
          <div class="api__items-card">
            <img
              src="/img/static/business/api-01.png"
              alt="API"
              class="api__items-image"
            />
            <p class="api__items-title">
              {{ $t("static.business.api.items[0]") }}
            </p>
          </div>
          <div class="api__items-card">
            <img
              src="/img/static/business/api-02.png"
              alt="API"
              class="api__items-image"
            />
            <p class="api__items-title">
              {{ $t("static.business.api.items[1]") }}
            </p>
          </div>
          <div class="api__items-card">
            <img
              src="/img/static/business/api-03.png"
              alt="API"
              class="api__items-image"
            />
            <p class="api__items-title">
              {{ $t("static.business.api.items[2]") }}
            </p>
          </div>
          <div class="api__items-card">
            <img
              src="/img/static/business/api-04.png"
              alt="API"
              class="api__items-image"
            />
            <p class="api__items-title">
              {{ $t("static.business.api.items[3]") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.api {
  padding-bottom: 200px;

  &__wrapper {
    position: relative;
    height: 218px;
    background-color: #3a3a44;
    backdrop-filter: blur(15px);
    border-radius: 30px;
  }

  &__text {
    display: flex;
    justify-content: space-between;
    padding: 60px;
    flex-wrap: wrap;

    &-title {
      font-family: "Russo One";
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 120%;
      color: #ffffff;
    }
    &-description {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 140%;
      color: #ffffff;
      max-width: 576px;
    }
  }

  &__items {
    position: absolute;
    bottom: 0;
    display: flex;
    gap: 20px;
    right: 50%;
    transform: translate(50%, 83%);

    &-card {
      position: relative;
    }

    &-image {
      border-radius: 20px;
    }

    &-title {
      position: absolute;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 140%;
      color: #ffffff;
      bottom: 5px;
      width: 100%;
      height: 46px;
      padding: 12px 20px;
      background: rgba(255, 255, 255, 0.35);
      backdrop-filter: blur(15px);
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }
}

@media (max-width: 1024px) {
  .api {
    padding-bottom: 0px;

    &__text {
      &-title {
        font-size: 30px;
      }
      &-description {
        font-size: 20px;
      }
    }

    &__items {
      display: none;
    }
  }
}

@media (max-width: 425px) {
  .api {
    &__text {
      padding: 30px;
    }
  }
}
</style>
