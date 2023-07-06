<script setup>
// Stores
import { usePopupStore } from "@/store/popup";
const popupStore = usePopupStore();

// Environment Variables
const runtimeConfig = useRuntimeConfig();

// Auth data
const basicAuth = {
  Authorization: `Basic ${runtimeConfig.public.basicAuth}`,
};

// Variables
const request = reactive({
  user_id: localStorage.userId,
  email: "",
  subject: "",
  description: "",
});

// Functions
function postRequest(request) {
  $fetch("/requests", {
    headers: basicAuth,
    method: "POST",
    baseURL: runtimeConfig.public.apiBase,
    body: request,
  }).then(function () {
    popupStore.popupSuccess = true;
    request.email = "";
    request.subject = "";
    request.description = "";
  });
}

// Computed
const areAllFiledsFilled = computed(() => {
  if (
    request.email !== "" &&
    request.subject !== "" &&
    request.description !== ""
  ) {
    return true;
  } else {
    return false;
  }
});
</script>

<template>
  <section class="form">
    <div class="container">
      <div class="form__wrapper">
        <h2 class="form__title">
          {{ $t("static.business.form.title") }}
        </h2>
        <p class="form__description">
          {{ $t("static.business.form.description") }}
        </p>
        <div class="form__block">
          <UiInputMain
            class="form__block-input"
            :placeholder="$t('static.business.form.placeholders[1]')"
            theme="primary"
            width="100%"
            v-model="request.email"
          />
          <UiInputMain
            class="form__block-input"
            :placeholder="$t('static.business.form.placeholders[3]')"
            theme="primary"
            width="100%"
            v-model="request.subject"
          />
          <UiTextareaMain
            class="form__block-input"
            :placeholder="$t('static.business.form.placeholders[4]')"
            theme="primary"
            width="100%"
            rows="7"
            v-model="request.description"
          />
          <UiButtonMain
            :title="$t('static.business.form.button')"
            theme="primary"
            width="100%"
            :class="{
              disabled: !areAllFiledsFilled,
            }"
            @click="postRequest(request)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.form {
  padding: 90px 0;

  &__wrapper {
    background-image: url("/img/static/business/form.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    height: 976px;
    padding: 60px;
    border-radius: 30px;
  }

  &__title {
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 120%;
    color: #ffffff;
    max-width: 705px;
    margin-bottom: 20px;
  }

  &__description {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 140%;
    color: #ffffff;
    max-width: 563px;
    margin-bottom: 60px;
  }

  &__block {
    width: 556px;
    padding: 40px;
    background-color: #ffffff;
    backdrop-filter: blur(15px);
    border-radius: 20px;

    &-input {
      margin-bottom: 10px;
    }
  }
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}

@media (max-width: 1024px) {
  .form {
    &__wrapper {
      background-size: cover;
    }
  }
}

@media (max-width: 425px) {
  .form {
    &__wrapper {
      padding: 30px;
    }

    &__title {
      font-size: 25px;
    }

    &__description {
      font-size: 16px;
    }

    &__block {
      width: 100%;
    }
  }
}
</style>
