export default defineNuxtRouteMiddleware((to, from) => {
  // Environment Variables
  const runtimeConfig = useRuntimeConfig();

  // States
  const useStatePopupSignIn = useState("statePopupSignIn");
  const useStatePopupSignUp = useState("statePopupSignUp");

  function toSignIn() {
    useStatePopupSignUp.value = false;
    useStatePopupSignIn.value = true;
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
