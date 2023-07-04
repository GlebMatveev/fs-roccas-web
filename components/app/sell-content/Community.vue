<template>
  <section class="community">
    <div class="container">
      <div class="community__wrapper">
        <h2 class="community__title">
          {{ $t("static.sellContent.community.title") }}
        </h2>
        <p class="community__description">
          {{ $t("static.sellContent.community.description") }}
        </p>
        <div class="community__items">
          <div class="community__items-card">
            <h3 class="community__items-title">
              {{ $t("static.sellContent.community.items[0].title") }}
            </h3>
            <p class="community__items-description">
              {{ $t("static.sellContent.community.items[0].description") }}
            </p>
            <UiButtonMain
              :title="$t('static.sellContent.community.items[0].button')"
              theme="transparent"
              icon-name="ButtonArrowRight"
              icon-size="18"
              to="/jobs"
            />
          </div>
          <div class="community__items-card">
            <h3 class="community__items-title">
              {{ $t("static.sellContent.community.items[1].title") }}
            </h3>
            <p class="community__items-description">
              {{ $t("static.sellContent.community.items[1].description") }}
            </p>
            <UiButtonMain
              :title="$t('static.sellContent.community.items[1].button')"
              theme="transparent"
              icon-name="ButtonArrowRight"
              icon-size="18"
              to="submit-a-request"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.community {
  padding: 60px 0;

  &__title {
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 120%;
    text-align: center;
    color: #3a3a44;
    margin: 0 auto 20px;
  }
  &__description {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    text-align: center;
    color: #dd6738;
    max-width: 798px;
    margin: 0 auto 40px;
  }

  &__items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    &-card {
      width: 605px;
      height: 371px;
      background-color: #3a3a44;
      border-radius: 30px;
      padding: 40px 20px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
    &-card:nth-child(odd) {
      background-image: url("/img/static/sell-content/community-01.png");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
    &-card:nth-child(even) {
      background-image: url("/img/static/sell-content/community-02.png");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }

    &-title {
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 120%;
      color: #ffffff;
      margin-bottom: 20px;
    }
    &-description {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 140%;
      color: #c4c4c4;
      margin-bottom: 40px;
    }
  }
}

@media (max-width: 1024px) {
  .community {
    &__items {
      &-card {
        width: 48%;
        background-size: cover !important;
      }
    }
  }
}

@media (max-width: 425px) {
  .community {
    &__title {
      font-size: 25px;
    }

    &__items {
      row-gap: 20px;

      &-card {
        width: 100%;
      }
    }
  }
}
</style>
