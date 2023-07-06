<script setup>
// Stores
import { usePopupStore } from "@/store/popup";
const popupStore = usePopupStore();

// Props
const props = defineProps({
  show: Boolean,
});

// Emits
const emit = defineEmits(["close", "to-sign-in"]);

// Environment Variables
const runtimeConfig = useRuntimeConfig();

// Auth data
const basicAuth = {
  Authorization: `Basic ${runtimeConfig.public.basicAuth}`,
};

// Router parameters
const router = useRouter();

// I18n
const { t } = useI18n();
const errorMsg = computed(() => {
  return t("popupSignUp.error");
});

// Functions
function signupUser(user) {
  $fetch("/auth/signup", {
    headers: basicAuth,
    method: "POST",
    baseURL: runtimeConfig.public.apiBase,
    body: user,
  }).then(function (response) {
    // response.user_adding = true - пользователь успешно зарегистрирован
    // response.user_adding = false - пользователь уже существует
    if (response.user_adding === true) {
      toSignIn();
    } else if (response.user_adding === false) {
      errorMessage.value = errorMsg;
    }
  });
}

function toSignIn() {
  popupStore.popupSignUp = false;
  popupStore.popupSignIn = true;
}

// Computed
const areAllFiledsFilled = computed(() => {
  if (
    user.image !== "" &&
    user.name !== "" &&
    user.surname !== "" &&
    user.description !== "" &&
    user.email !== "" &&
    user.password !== "" &&
    user.password_repeat !== "" &&
    user.password === user.password_repeat &&
    user.privacy == true
  ) {
    return true;
  } else {
    return false;
  }
});

// Image loading
const inputFile = ref(null);
let imageFile = ref(null);
let imageUrl = ref("/img/static/signup/placeholder.png");

const onImageChange = (event) => {
  inputFile.value = "";
  imageFile.value = event.target.files[0];

  const reader = new FileReader();

  reader.onload = (event) => {
    imageUrl.value = event.target.result;
    user.image = event.target.result;
  };
  reader.readAsDataURL(imageFile.value);
};

function deleteImage() {
  user.image = "";
  inputFile.value = "";
  imageFile.value = null;
  imageUrl.value = "/img/static/signup/placeholder.png";
}

// Variables
const user = reactive({
  image: "",
  name: "",
  surname: "",
  description: "",
  email: "",
  password: "",
  password_repeat: "",
  privacy: false,
});
let errorMessage = ref("");
</script>

<template>
  <div
    v-if="show"
    class="modal__overlay"
  >
    <div class="modal">
      <div class="modal__form">
        <h2 class="modal__title">{{ $t("popupSignUp.title") }}</h2>
        <p class="modal__description">
          {{ $t("popupSignUp.description") }}
          <span
            class="modal__description-span"
            @click="emit('to-sign-in')"
          >
            {{ $t("popupSignUp.link") }}
          </span>
        </p>

        <div class="modal__photo-wrapper">
          <img
            class="modal__photo-placeholder"
            :src="imageUrl"
          />
          <label
            class="modal__file-label"
            for="modal__file-upload"
          >
            {{ $t("popupSignUp.buttonPhotoAdd") }}
          </label>
          <input
            class="modal__file-input"
            id="modal__file-upload"
            type="file"
            ref="inputFile"
            @change="onImageChange"
          />

          <UiButtonMain
            class="modal__delete-button"
            theme="error"
            height="36px"
            width="140px"
            border-radius="30px"
            padding="0"
            :title="$t('popupSignUp.buttonPhotoDelete')"
            v-if="imageFile"
            @click="deleteImage"
          />
        </div>

        <div class="modal__input-wrapper">
          <UiInputMain
            class="modal__input"
            type="text"
            theme="primary"
            :placeholder="$t('popupSignUp.placeholders[0]')"
            v-model="user.name"
          />
          <UiInputMain
            class="modal__input"
            type="text"
            theme="primary"
            :placeholder="$t('popupSignUp.placeholders[1]')"
            v-model="user.surname"
          />
        </div>
        <UiInputMain
          class="modal__input"
          type="text"
          theme="primary"
          :placeholder="$t('popupSignUp.placeholders[2]')"
          v-model="user.description"
        />
        <UiInputMain
          class="modal__input"
          type="email"
          theme="primary"
          :placeholder="$t('popupSignUp.placeholders[3]')"
          v-model="user.email"
        />

        <UiInputMain
          class="modal__input"
          type="password"
          theme="primary"
          :placeholder="$t('popupSignUp.placeholders[4]')"
          v-model="user.password"
        />
        <UiInputMain
          class="modal__input"
          type="password"
          theme="primary"
          :placeholder="$t('popupSignUp.placeholders[5]')"
          v-model="user.password_repeat"
        />
        <div class="modal__checkbox-wrapper">
          <input
            class="modal__checkbox"
            type="checkbox"
            v-model="user.privacy"
          />
          <p class="modal__checkbox-label">{{ $t("popupSignUp.label") }}</p>
        </div>

        <UiButtonMain
          class="modal__button"
          theme="primary"
          width="100%"
          :title="$t('popupSignUp.buttonCreate')"
          :class="{
            disabled: !areAllFiledsFilled,
          }"
          @click="signupUser(user)"
        />

        <p class="modal__error">
          {{ errorMessage }}
        </p>
      </div>
    </div>

    <Icon
      class="modal__close-button"
      @click="emit('close')"
      name="PopupClose"
      size="24"
    />
  </div>
</template>

<style lang="scss" scoped>
.modal {
  width: 510px;
  height: 746px;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 20px;
  margin-top: 5%;

  &__form {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 135%;
    color: #3a3a44;
    margin-bottom: 10px;
  }

  &__description {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #3a3a44;
    margin-bottom: 20px;
  }

  &__description-span {
    color: #dd6738;
    cursor: pointer;
  }

  &__photo-wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
  }

  &__photo-placeholder {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    object-fit: cover;
  }

  &__file-label {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #dd6738;
    width: 140px;
    height: 36px;
    border: 1.5px solid #dd6738;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }

  input[type="file"] {
    display: none;
  }

  &__input-wrapper {
    display: flex;
    gap: 10px;
  }

  &__input {
    width: 100%;
    margin-bottom: 10px;
  }

  &__checkbox-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }

  &__checkbox {
    margin-right: 15px;
    cursor: pointer;
  }

  &__checkbox-label {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #3a3a44;
  }

  &__button {
    margin-bottom: 10px;
  }

  &__error {
    font-size: 14px;
    color: #dd6738;
  }

  &__overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: rgba(58, 58, 68, 0.4);
    backdrop-filter: blur(6px);
    z-index: 5;
  }

  &__close-button {
    margin: 6% 0 0 -40px;
    cursor: pointer;
  }
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}

@media (max-width: 425px) {
  .modal {
    width: 90%;

    &__overlay {
      left: -20px;
    }

    &__close-button {
      margin: 9% 0 0 -40px;
    }
  }
}
</style>
