import { defineStore } from "pinia";

export const useCartStore = defineStore("cartStore", () => {
  const currentTotalSum = ref();
  const currentProductName = ref();
  const currentCurrency = ref({
    code: "USD",
    rate: 1.0,
  });

  return { currentTotalSum, currentProductName, currentCurrency };
});
