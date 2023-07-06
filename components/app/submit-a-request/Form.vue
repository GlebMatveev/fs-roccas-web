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
          {{ $t("static.submitARequest.form.title") }}
        </h2>
        <UiInputMain
          class="form__input"
          :placeholder="$t('static.submitARequest.form.input1')"
          theme="primary"
          width="100%"
          v-model="request.email"
        />
        <UiInputMain
          class="form__input"
          :placeholder="$t('static.submitARequest.form.input2')"
          theme="primary"
          width="100%"
          v-model="request.subject"
        />
        <p class="form__label">
          {{ $t("static.submitARequest.form.description1") }}
        </p>
        <UiTextareaMain
          class="form__textarea"
          :placeholder="$t('static.submitARequest.form.textarea')"
          theme="primary"
          width="100%"
          rows="5"
          v-model="request.description"
        />
        <p class="form__label">
          {{ $t("static.submitARequest.form.description2") }}
        </p>
        <p class="form__label">
          {{ $t("static.submitARequest.form.description3") }}
        </p>
        <UiButtonMain
          :title="$t('static.submitARequest.form.button')"
          theme="primary"
          :class="{
            disabled: !areAllFiledsFilled,
          }"
          @click="postRequest(request)"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.form {
  display: flex;
  padding-bottom: 60px;

  &__wrapper {
    max-width: 600px;
  }

  &__title {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #3a3a44;
    margin-bottom: 40px;
  }

  &__input {
    margin-bottom: 20px;
  }

  &__textarea {
    margin-bottom: 20px;
  }

  &__label {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #9191a1;
    margin-bottom: 20px;
  }
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}

@media (max-width: 768px) {
  .form {
    &__wrapper {
      width: 100%;
    }
  }
}
</style>
