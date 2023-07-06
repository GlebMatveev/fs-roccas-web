<script setup>
// Stores
import { useProductStore } from "@/store/product";
import { useFilterStore } from "@/store/filter";

const productStore = useProductStore();
const filterStore = useFilterStore();

// Router parameters
const router = useRouter();

// Functions
function applyFilterAndRouterPush(category) {
  filterStore.filters.categories = [category];
  filterStore.filters.skip = 0;
  productStore.getProducts();
  router.push("/catalog/");
  window.scrollTo(0, 0);
}

function clearFilterAndRouterPush() {
  filterStore.filters.categories = [];
  filterStore.filters.skip = 0;
  productStore.getProducts();
  router.push("/catalog/");
  window.scrollTo(0, 0);
}
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <NuxtLink
          class="footer__logo-link"
          to="/"
        >
          <img
            class="footer__logo"
            src="/img/static/logo-light.png"
            alt="Logo"
          />
        </NuxtLink>

        <div class="footer__content">
          <div class="footer__content-column">
            <p class="footer__content-title">
              {{ $t("footer.categories.title") }}
            </p>
            <ul class="footer__content-list">
              <p
                class="footer__content-link"
                @click="clearFilterAndRouterPush()"
              >
                {{ $t("footer.categories.items[0]") }}
              </p>
              <li class="footer__content-item">
                <p
                  class="footer__content-link"
                  @click="applyFilterAndRouterPush('1')"
                >
                  {{ $t("footer.categories.items[1]") }}
                </p>
              </li>
              <li class="footer__content-item">
                <p
                  class="footer__content-link"
                  @click="applyFilterAndRouterPush('2')"
                >
                  {{ $t("footer.categories.items[2]") }}
                </p>
              </li>
              <li class="footer__content-item">
                <p
                  class="footer__content-link"
                  @click="applyFilterAndRouterPush('3')"
                >
                  {{ $t("footer.categories.items[3]") }}
                </p>
              </li>
              <li class="footer__content-item">
                <p
                  class="footer__content-link"
                  @click="applyFilterAndRouterPush('4')"
                >
                  {{ $t("footer.categories.items[4]") }}
                </p>
              </li>
            </ul>
          </div>

          <div class="footer__content-column">
            <p class="footer__content-title">
              {{ $t("footer.information.title") }}
            </p>
            <ul class="footer__content-list">
              <li class="footer__content-item">
                <NuxtLink
                  class="footer__content-link"
                  to="/business"
                >
                  {{ $t("footer.information.items[0]") }}
                </NuxtLink>
              </li>
              <li class="footer__content-item">
                <NuxtLink
                  class="footer__content-link"
                  to="/about"
                >
                  {{ $t("footer.information.items[1]") }}
                </NuxtLink>
              </li>
              <li class="footer__content-item">
                <NuxtLink
                  class="footer__content-link"
                  to="/jobs"
                >
                  {{ $t("footer.information.items[2]") }}
                </NuxtLink>
              </li>
              <li class="footer__content-item">
                <NuxtLink
                  class="footer__content-link"
                  to="/sell-content"
                >
                  {{ $t("footer.information.items[3]") }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="footer__content-column">
            <p class="footer__content-title">
              {{ $t("footer.legal.title") }}
            </p>
            <ul class="footer__content-list">
              <li class="footer__content-item">
                <NuxtLink
                  class="footer__content-link"
                  to="/terms"
                >
                  {{ $t("footer.legal.items[0]") }}
                </NuxtLink>
              </li>
              <li class="footer__content-item">
                <NuxtLink
                  class="footer__content-link"
                  to="/privacy"
                >
                  {{ $t("footer.legal.items[1]") }}
                </NuxtLink>
              </li>
              <li class="footer__content-item">
                <NuxtLink
                  class="footer__content-link"
                  to="/cookie"
                >
                  {{ $t("footer.legal.items[2]") }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="footer__content-column">
            <p class="footer__content-title">
              {{ $t("footer.legal.title") }}
            </p>
            <ul class="footer__content-list">
              <li class="footer__content-item">
                <NuxtLink
                  class="footer__content-link"
                  to="/community"
                >
                  {{ $t("footer.support.items[0]") }}
                </NuxtLink>
              </li>
              <li class="footer__content-item">
                <NuxtLink
                  class="footer__content-link"
                  to="/submit-a-request"
                >
                  {{ $t("footer.support.items[1]") }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="footer__subscribe">
            <p class="footer__subscribe-title">
              {{ $t("footer.subscribe.title") }}
            </p>
            <div class="footer__subscribe-wrapper">
              <UiInputMain
                class="footer__subscribe-input"
                :placeholder="$t('footer.subscribe.placeholder')"
                theme="subscribe"
                width="100%"
                height="64px"
              />
              <UiButtonMain
                class="footer__subscribe-button"
                :title="$t('footer.subscribe.button')"
                theme="primary"
                width="100%"
                height="54px"
                padding="0 10px"
                border-radius="15px"
              />
            </div>
          </div>
        </div>

        <div class="footer__bottom">
          <p class="footer__bottom-copyright">
            {{ $t("footer.copyright") }}
          </p>
          <div class="footer__bottom-icons">
            <Icon
              name="FooterMasterCard"
              size="35"
            />
            <Icon
              name="FooterVisa"
              size="35"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding-top: 60px;
  background-color: #3a3a44;

  &__content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 60px 0;
    row-gap: 30px;

    &-list {
      display: flex;
      flex-direction: column;
    }

    &-title {
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;
      color: #ffffff;
    }

    &-link {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 26px;
      color: #c4c4c4;
      cursor: pointer;
    }
  }

  &__subscribe {
    width: 445px;

    &-title {
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;
      color: #ffffff;
      margin-bottom: 10px;
    }

    &-wrapper {
      position: relative;
    }

    &-button {
      position: absolute;
      top: 50%;
      right: 5px;
      transform: translate(0%, -50%);
    }
  }

  &__bottom {
    border-top: 1px solid #dd6738;
    padding: 16px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    &-copyright {
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 18px;
      color: #c4c4c4;
    }

    &-icons {
      display: flex;
      gap: 20px;
    }
  }
}
</style>
