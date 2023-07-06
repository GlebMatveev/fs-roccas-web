<script setup>
// Pinia stores
import { useProductStore } from '@/store/product';
import { usePopupStore } from '@/store/popup';

const productStore = useProductStore();
const popupStore = usePopupStore();

onMounted(() => {
  productStore.getProducts();
})


// Nuxt states
const useStateCurrency = useState("stateCurrency");
useStateCurrency.value = {
  code: "USD",
  rate: 1.0,
};

const useStatePopupCurrentPrice = useState("statePopupCurrentPrice", () => "");
const useStatePopupCurrentProduct = useState(
  "statePopupCurrentProduct",
  () => ""
);

const useStateToPath = useState("stateToPath", () => "");

const useStateSearchResultField = useState(
  "stateSearchResultField",
  () => false
);


// Functions
function toSignIn() {
  popupStore.popupSignUp = false;
  popupStore.popupSignIn = true;
}

function toSignUp() {
  popupStore.popupSignUp = false;
  popupStore.popupSignIn = true;
}
</script>

<template>
  <div class="root">
    <AppHeader />

    <main class="main" @click="useStateSearchResultField = false">
      <NuxtLoadingIndicator />
      <NuxtPage />
    </main>

    <AppFooter />

    <!-- Popup -->
    <UiPopupSignIn :show="popupStore.popupSignIn" @close="popupStore.popupSignIn = false" @to-sign-up="toSignUp()" />
    <UiPopupSignUp :show="popupStore.popupSignUp" @close="popupStore.popupSignUp = false" @to-sign-in="toSignIn()" />
    <UiPopupCheckout :show="popupStore.popupCheckout" @close="popupStore.popupCheckout = false" />
    <UiPopupTransactionFailed :show="popupStore.popupTransactionFailed"
      @close="popupStore.popupTransactionFailed = false" />
    <UiPopupSuccess :show="popupStore.popupSuccess" @close="popupStore.popupSuccess = false" />
  </div>
</template>

<style lang="scss">
.main {
  flex-grow: 1;
  min-height: 700px;
}
</style>
