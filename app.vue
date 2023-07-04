<script setup>
import { useProductStore } from '@/store/product';

// Pinia stores
const productStore = useProductStore();

onMounted(() => {
  productStore.getProducts();
})


// Environment Variables
const runtimeConfig = useRuntimeConfig();

// Init filter
const filter = reactive({
  sort_direction: "desc",
  sort_by: "price",
  skip: "0",
  take: "12",
  categories: [],
  price_min: "0",
  price_max: "0",
  rating_min: "0",
});

// Auth data
const basicAuth = { Authorization: `Basic ${runtimeConfig.public.basicAuth}` };

// Fetch
// const { data: categories } = await useFetch(
//   runtimeConfig.public.apiBase + "/categories", { headers: basicAuth }
// );

// const { data: products } = await useAsyncData("product", () =>
//   $fetch(runtimeConfig.public.apiBase + "/products", {
//     headers: basicAuth,
//     method: "POST",
//     body: filter,
//   })
// );

// States
// const useStateCategories = useState("stateCategories", () => categories);
// const useStateProducts = useState("stateProducts", () => products);

const useStateProducts = useState("stateProducts", () => productStore.products);



const useStateFilter = useState("stateFilter", () => filter);

const useStateCurrency = useState("stateCurrency");
useStateCurrency.value = {
  code: "USD",
  rate: 1.0,
};

const useStatePopupSignIn = useState("statePopupSignIn", () => false);
const useStatePopupSignUp = useState("statePopupSignUp", () => false);
const useStatePopupCheckout = useState("statePopupCheckout", () => false);
const useStatePopupTransactionFailed = useState(
  "statePopupTransactionFailed",
  () => false
);
const useStatePopupSuccess = useState("statePopupSuccess", () => false);
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
const useStateLoaderContent = useState("stateLoaderContent", () => false);

// Functions
function toSignIn() {
  useStatePopupSignUp.value = false;
  useStatePopupSignIn.value = true;
}

function toSignUp() {
  useStatePopupSignIn.value = false;
  useStatePopupSignUp.value = true;
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

    <UiPopupSignIn :show="useStatePopupSignIn" @close="useStatePopupSignIn = false" @to-sign-up="toSignUp()" />
    <UiPopupSignUp :show="useStatePopupSignUp" @close="useStatePopupSignUp = false" @to-sign-in="toSignIn()" />

    <UiPopupCheckout :show="useStatePopupCheckout" @close="useStatePopupCheckout = false" />
    <UiPopupTransactionFailed :show="useStatePopupTransactionFailed" @close="useStatePopupTransactionFailed = false" />
    <UiPopupSuccess :show="useStatePopupSuccess" @close="useStatePopupSuccess = false" />
  </div>
</template>

<style lang="scss">
.main {
  flex-grow: 1;
  min-height: 700px;
}
</style>
