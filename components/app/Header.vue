<script setup>
// Stores
import { usePopupStore } from '@/store/popup';
const popupStore = usePopupStore();

// Environment Variables
const runtimeConfig = useRuntimeConfig();


// Auth data
const basicAuth = {
  Authorization: `Basic ${runtimeConfig.public.basicAuth}`,
};


// Router parameters
const router = useRouter();


// States
const useStateToPath = useState("stateToPath");


// Functions
function toSignIn() {
  popupStore.popupSignUp = false;
  popupStore.popupSignIn = true;
}

function checkAuth(to) {
  useStateToPath.value = to;
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
          router.push(useStateToPath.value);
        }
      })
      .catch((error) => {
        console.log(error);
        toSignIn();
      });
  }
}
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__topbar">
        <NuxtLink class="header__logo-link" to="/">
          <img class="header__logo" src="/img/static/logo.png" alt="Logo" />
        </NuxtLink>

        <ul class="header__links">
          <li>
            <NuxtLink class="header__links-item" to="/catalog">{{
                          $t("header.links[0]")
                          }}</NuxtLink>
          </li>
          <li>
            <NuxtLink class="header__links-item" to="/about">{{
                          $t("header.links[1]")
                          }}</NuxtLink>
          </li>
          <li>
            <NuxtLink class="header__links-item" to="/jobs">{{
                          $t("header.links[2]")
                          }}</NuxtLink>
          </li>
          <li>
            <NuxtLink class="header__links-item" to="/business">{{
                          $t("header.links[3]")
                          }}</NuxtLink>
          </li>
          <li>
            <NuxtLink class="header__links-item" to="/sell-content">{{
                          $t("header.links[4]")
                          }}</NuxtLink>
          </li>
          <li>
            <NuxtLink class="header__links-item" to="/community">{{
                          $t("header.links[5]")
                          }}</NuxtLink>
          </li>
        </ul>

        <div class="header__buttons">
          <UiSelectLangSwitcher />
          <UiSelectCurrencySwitcher />

          <p class="header__buttons-item" @click="checkAuth('/profile/projects')">
            {{ $t("header.buttons[0]") }}
          </p>

          <p class="header__buttons-item" @click="popupStore.popupSignIn = true">
            {{ $t("header.buttons[1]") }}
          </p>

          <UiButtonMain :title="$t('header.buttons[2]')" theme="secondary" border-radius="30px"
            @click="popupStore.popupSignUp = true" />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 25px 0;

  &__topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 20px;
  }

  &__links {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;

    &-item {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      color: #3a3a44;
    }

    &-item:hover {
      color: #dd6738;
    }
  }

  &__buttons {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;

    &-item {
      font-style: normal;
      font-weight: 700;
      font-size: 13px;
      letter-spacing: 0.02em;
      color: #3a3a44;
      text-transform: uppercase;
      cursor: pointer;
    }

    &-item:hover {
      color: #dd6738;
    }
  }
}

.router-link-active {
  color: #dd6738;
}

@media (max-width: 768px) {
  .header {
    &__links {
      display: none;
    }
  }
}
</style>
