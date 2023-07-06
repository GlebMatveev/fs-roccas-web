<script setup>
// Stores
import { usePopupStore } from '@/store/popup';
const popupStore = usePopupStore();

// Environment Variables
const runtimeConfig = useRuntimeConfig();

// Route parameters
const route = useRoute();

// Auth data
const basicAuth = {
  Authorization: `Basic ${runtimeConfig.public.basicAuth}`,
};

// Fetch
const { data: products } = await useFetch(
  runtimeConfig.public.apiBase + "/products/" + route.params.id, { headers: basicAuth }
);
const product = products.value[0];

// States
const useStateCurrency = useState("stateCurrency");
const useStatePopupCurrentPrice = useState("statePopupCurrentPrice");
const useStatePopupCurrentProduct = useState("statePopupCurrentProduct");
const useStateToPath = useState("stateToPath");

function checkAuth(price, productName) {
  useStateToPath.value = "";

  // если нет данных авторизации
  if (!localStorage.userId || !localStorage.userToken) {
    toSignIn();
    // если есть данные авторизации
  } else if (localStorage.userId && localStorage.userToken) {
    let checkToken = {
      userId: localStorage.userId,
      userToken: localStorage.userToken,
    };

    $fetch("/auth/token", {
      headers: basicAuth,
      method: "POST",
      baseURL: runtimeConfig.public.apiBase,
      body: checkToken,
    })
      .then((response) => {
        // code = 0 - истёк срок жизни токена
        // code = 1 - токен актуален
        if (response.code == 0) {
          toSignIn();
        } else if (response.code == 1) {
          openCheckoutPopup(price, productName);
        }
      })
      .catch((error) => {
        console.log(error);
        toSignIn();
      });
  }
}

function openCheckoutPopup(price, productName) {
  useStatePopupCurrentPrice.value = price;
  useStatePopupCurrentProduct.value = productName;
  popupStore.popupCheckout = true;
}

function toSignIn() {
  popupStore.popupSignUp = false;
  popupStore.popupSignIn = true;
}

function calcCurrencyRate(price) {
  return (
    parseFloat(price.replace(/[\s,%]/g, "")) *
    parseFloat(useStateCurrency.value.rate)
  ).toFixed(2);
}

// Image placeholder
const imagePlaceholder = "/img/products/placeholder.jpg";
function replaceImgByDefault(e) {
  e.target.src = imagePlaceholder;
}

useHead({
  title: "Roccas | Catalog",
});
</script>

<template>
  <section class="catalog">
    <div class="container">
      <div class="catalog__wrapper">
        <NuxtLink class="catalog__breadcrumbs" to="/catalog">
          <Icon name="CatalogDetailArrowLeft" size="24" />
          <p class="catalog__breadcrumbs-text">
            {{ $t("static.catalogDetail.breadcrumbs") }}
          </p>
        </NuxtLink>

        <div class="catalog__topbar">
          <h2 class="catalog__topbar-title">
            {{ product.name }}
          </h2>
        </div>

        <img :src="`/img/products/${product.image}`" alt="Image" class="catalog__image" @error="replaceImgByDefault" />

        <div class="catalog__bottombar">
          <div class="catalog__bottombar-text">
            <p class="catalog__bottombar-text-title">
              {{ $t("static.catalogDetail.developer") }}
            </p>
            <p class="catalog__bottombar-text-developer">
              {{ product.developer }}
            </p>
          </div>
          <UiButtonMain theme="primary"
            :title="`${$t('static.catalogDetail.button')}:
                                                                        ${calcCurrencyRate(product.price)} ${useStateCurrency.code}`"
            @click="checkAuth(product.price, product.name)" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.catalog {
  &__breadcrumbs {
    padding-top: 20px;
    display: flex;
    gap: 10px;

    &-text {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      color: #404145;
    }
  }

  &__topbar {
    padding: 40px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    &-title {
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 120%;
      color: #3a3a44;
    }
  }

  &__image {
    width: 100%;
    object-fit: contain;
  }

  &__bottombar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 40px 0 60px 0;

    &-text {
      &-title {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 140%;
        color: #9191a1;
      }

      &-developer {
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 140%;
        color: #3a3a44;
      }
    }
  }
}
</style>
