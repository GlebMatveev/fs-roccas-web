import { usePopupStore } from "@/store/popup";

export default defineNuxtRouteMiddleware((to, from) => {
  // Stores
  const popupStore = usePopupStore();

  // Environment Variables
  const runtimeConfig = useRuntimeConfig();

  // Auth data
  const basicAuth = {
    Authorization: `Basic ${runtimeConfig.public.basicAuth}`,
  };

  function toSignIn() {
    popupStore.popupSignUp = false;
    popupStore.popupSignIn = true;
  }

  // если нет данных авторизации
  if (!localStorage.userId || !localStorage.userToken) {
    toSignIn();
    return navigateTo(from);
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
          return navigateTo(from);
        } else if (response.code == 1) {
          return true;
        }
      })
      .catch((error) => {
        console.log(error);
        return navigateTo("/");
      });
  }
});
