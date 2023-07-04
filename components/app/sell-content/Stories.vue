<template>
  <section class="stories">
    <div class="container">
      <div class="stories__wrapper">
        <h2 class="stories__title">
          {{ $t("static.sellContent.stories.title") }}
        </h2>
        <div class="stories__items">
          <div class="stories__items-card">
            <img
              src="/img/static/sell-content/stories-01.png"
              alt="Stories"
              class="stories__items-image"
            />
            <p class="stories__items-title">
              {{ $t("static.sellContent.stories.items[0].title") }}
            </p>
            <p class="stories__items-link">
              {{ $t("static.sellContent.stories.items[0].link") }}
            </p>
          </div>
          <div class="stories__items-card">
            <img
              src="/img/static/sell-content/stories-02.png"
              alt="Stories"
              class="stories__items-image"
            />
            <p class="stories__items-title">
              {{ $t("static.sellContent.stories.items[1].title") }}
            </p>
            <p class="stories__items-link">
              {{ $t("static.sellContent.stories.items[1].link") }}
            </p>
          </div>
          <div class="stories__items-card">
            <img
              src="/img/static/sell-content/stories-03.png"
              alt="Stories"
              class="stories__items-image"
            />
            <p class="stories__items-title">
              {{ $t("static.sellContent.stories.items[2].title") }}
            </p>
            <p class="stories__items-link">
              {{ $t("static.sellContent.stories.items[2].link") }}
            </p>
          </div>
          <div class="stories__items-card">
            <img
              src="/img/static/sell-content/stories-04.png"
              alt="Stories"
              class="stories__items-image"
            />
            <p class="stories__items-title">
              {{ $t("static.sellContent.stories.items[3].title") }}
            </p>
            <p class="stories__items-link"></p>
            <UiButtonMain
              class="disabled"
              :title="$t('static.sellContent.stories.items[3].link')"
              theme="primary"
              icon-name="ButtonArrowRight"
              icon-size="18"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.stories {
  padding: 60px 0;

  &__title {
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 120%;
    text-align: center;
    color: #3a3a44;
    max-width: 484px;
    margin: 0 auto 40px;
  }

  &__items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    &-card {
      background: #f2f2f2;
      border-radius: 30px;
      padding: 20px;
      width: 292.5px;
    }
    &-image {
      border-radius: 30px;
      margin-bottom: 20px;
    }
    &-title {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 120%;
      color: #3a3a44;
      margin-bottom: 20px;
    }
    &-link {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 120%;
      color: #dd6738;
    }
  }
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}

@media (max-width: 1024px) {
  .stories {
    &__items {
      row-gap: 30px;

      &-card {
        width: 48%;
      }
      &-image {
        width: 100%;
      }
    }
  }
}

@media (max-width: 425px) {
  .stories {
    &__title {
      font-size: 25px;
    }

    &__items {
      &-card {
        width: 100%;
      }
    }
  }
}
</style>
