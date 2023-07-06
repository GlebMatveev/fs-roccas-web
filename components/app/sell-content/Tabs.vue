<script setup>
// Stores
import { usePopupStore } from "@/store/popup";
const popupStore = usePopupStore();

const tabs = reactive([true, false, false]);

function toggleTabs(tabNumber) {
  for (let key in tabs) {
    tabs[key] = false;
  }

  tabs[tabNumber] = true;
}
</script>

<template>
  <section class="tabs">
    <div class="container">
      <div class="tabs__wrapper">
        <h2 class="tabs__title">
          {{ $t("static.sellContent.tabs.title") }}
        </h2>
        <p class="tabs__description">
          {{ $t("static.sellContent.tabs.description") }}
        </p>
        <div class="tabs__buttons">
          <div
            class="tabs__buttons-item"
            :class="{ 'tabs__buttons-item--active': tabs[0] }"
            @click="toggleTabs(0)"
          >
            <p class="tabs__buttons-title">
              {{ $t("static.sellContent.tabs.buttons[0]") }}
            </p>
          </div>
          <div
            class="tabs__buttons-item"
            :class="{ 'tabs__buttons-item--active': tabs[1] }"
            @click="toggleTabs(1)"
          >
            <p class="tabs__buttons-title">
              {{ $t("static.sellContent.tabs.buttons[1]") }}
            </p>
          </div>
          <div
            class="tabs__buttons-item"
            :class="{ 'tabs__buttons-item--active': tabs[2] }"
            @click="toggleTabs(2)"
          >
            <p class="tabs__buttons-title">
              {{ $t("static.sellContent.tabs.buttons[2]") }}
            </p>
          </div>
        </div>
        <div class="tabs__items">
          <div
            class="tabs__items-card"
            v-show="tabs[0]"
          >
            <div class="tabs__items-text">
              <h3 class="tabs__items-title">
                {{ $t("static.sellContent.tabs.items[0].title") }}
              </h3>
              <p class="tabs__items-description">
                {{ $t("static.sellContent.tabs.items[0].description") }}
              </p>
              <UiButtonMain
                :title="$t('static.sellContent.tabs.items[0].button')"
                theme="primary"
                icon-name="ButtonArrowRight"
                icon-size="18"
                @click="popupStore.popupSignUp = true"
              />
            </div>
            <img
              src="/img/static/sell-content/tabs-01.png"
              alt="Tab"
              class="tabs__items-image"
            />
          </div>
          <div
            class="tabs__items-card"
            v-show="tabs[1]"
          >
            <div class="tabs__items-text">
              <h3 class="tabs__items-title">
                {{ $t("static.sellContent.tabs.items[1].title") }}
              </h3>
              <p class="tabs__items-description">
                {{ $t("static.sellContent.tabs.items[1].description") }}
              </p>
              <UiButtonMain
                :title="$t('static.sellContent.tabs.items[1].button')"
                theme="primary"
                icon-name="ButtonArrowRight"
                icon-size="18"
                @click="popupStore.popupSignUp = true"
              />
            </div>
            <img
              src="/img/static/sell-content/tabs-02.png"
              alt="Tab"
              class="tabs__items-image"
            />
          </div>
          <div
            class="tabs__items-card"
            v-show="tabs[2]"
          >
            <div class="tabs__items-text">
              <h3 class="tabs__items-title">
                {{ $t("static.sellContent.tabs.items[2].title") }}
              </h3>
              <p class="tabs__items-description">
                {{ $t("static.sellContent.tabs.items[2].description") }}
              </p>
              <UiButtonMain
                :title="$t('static.sellContent.tabs.items[2].button')"
                theme="primary"
                icon-name="ButtonArrowRight"
                icon-size="18"
                @click="popupStore.popupSignUp = true"
              />
            </div>
            <img
              src="/img/static/sell-content/tabs-03.png"
              alt="Tab"
              class="tabs__items-image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.tabs {
  padding-top: 60px;

  &__title {
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 120%;
    text-align: center;
    color: #3a3a44;
    max-width: 513px;
    margin: 0 auto 20px;
  }

  &__description {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    text-align: center;
    color: #dd6738;
    margin-bottom: 40px;
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 40px;

    &-item {
      padding: 30px;
      border: 1px solid #dd6738;
      border-radius: 20px;
      width: 399px;
      cursor: pointer;
    }

    &-item--active {
      background-color: #dd6738;
    }

    &-item--active > p {
      color: #ffffff;
    }

    &-title {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 140%;
      color: #3a3a44;
    }
  }

  &__items {
    &-card {
      padding: 60px;
      background-color: #f3f3f3;
      border-radius: 30px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    &-text {
      max-width: 500px;
    }

    &-title {
      font-style: normal;
      font-weight: 800;
      font-size: 32px;
      line-height: 120%;
      color: #3a3a44;
      margin-bottom: 20px;
    }

    &-description {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      color: #3a3a44;
      margin-bottom: 40px;
    }

    &-image {
      height: 340px;
      max-width: 535px;
      object-fit: cover;
      border-bottom: 4px solid #dd6738;
      border-radius: 30px;
    }
  }
}

@media (max-width: 1024px) {
  .tabs {
    &__buttons {
      &-item {
        width: 300px;
      }
    }

    &__items {
      &-text {
        max-width: 400px;
      }

      &-description {
        min-height: 216px;
      }

      &-image {
        max-width: 435px;
      }
    }
  }
}

@media (max-width: 768px) {
  .tabs {
    &__buttons {
      &-item {
        width: 220px;
      }
    }

    &__items {
      &-card {
        flex-wrap: wrap-reverse;
        gap: 20px;
      }

      &-image {
        height: 100%;
        max-width: 100%;
      }
    }
  }
}

@media (max-width: 425px) {
  .tabs {
    &__title {
      font-size: 25px;
    }

    &__buttons {
      gap: 10px;

      &-item {
        width: 100%;
      }
    }

    &__items {
      &-card {
        padding: 30px;
      }
    }
  }
}
</style>
