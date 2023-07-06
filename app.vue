<script setup>
// Pinia stores
import { useProductStore } from "@/store/product";
import { usePopupStore } from "@/store/popup";
import { useCartStore } from "@/store/cart";

const productStore = useProductStore();
const popupStore = usePopupStore();
const cartStore = useCartStore();

// Nuxt states
const useStateToRouteAfterAuth = useState("stateToRouteAfterAuth", () => "");
const useStateSearchResultsVisibility = useState(
  "stateSearchResultsVisibility",
  () => false
);

// Hooks
onMounted(() => {
  productStore.getProducts();
});

// Functions
function showPopupSignIn() {
  popupStore.popupSignUp = false;
  popupStore.popupSignIn = true;
}

function showPopupSignUp() {
  popupStore.popupSignIn = false;
  popupStore.popupSignUp = true;
}
</script>

<template>
  <div
    class="root"
    @click="useStateSearchResultsVisibility = false"
  >
    <AppHeader />

    <main class="main">
      <NuxtLoadingIndicator />
      <NuxtPage />
    </main>

    <AppFooter />

    <!-- Popup -->
    <UiPopupSignIn
      :show="popupStore.popupSignIn"
      @close="popupStore.popupSignIn = false"
      @to-sign-up="showPopupSignUp()"
    />
    <UiPopupSignUp
      :show="popupStore.popupSignUp"
      @close="popupStore.popupSignUp = false"
      @to-sign-in="showPopupSignIn()"
    />
    <UiPopupCheckout
      :show="popupStore.popupCheckout"
      @close="popupStore.popupCheckout = false"
      :total-sum="cartStore.currentTotalSum"
      :product-name="cartStore.currentProductName"
      :currency="cartStore.currentCurrency"
    />
    <UiPopupTransactionFailed
      :show="popupStore.popupTransactionFailed"
      @close="popupStore.popupTransactionFailed = false"
    />
    <UiPopupSuccess
      :show="popupStore.popupSuccess"
      @close="popupStore.popupSuccess = false"
    />
  </div>
</template>

<style lang="scss">
.main {
  flex-grow: 1;
  min-height: 700px;
}
</style>
