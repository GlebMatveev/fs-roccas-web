import { defineStore } from "pinia";

export const usePopupStore = defineStore("popupStore", () => {
  // Popup
  const popupSignIn = ref(false);
  const popupSignUp = ref(false);
  const popupTransactionFailed = ref(false);
  const popupSuccess = ref(false);
  //   const popupCheckout = ref(false);

  return { popupSignIn, popupSignUp, popupTransactionFailed, popupSuccess };
});
