<script setup>
// Environment Variables
const runtimeConfig = useRuntimeConfig();

// Auth data
const basicAuth = {
  Authorization: `Basic ${runtimeConfig.public.basicAuth}`,
};

// Router parameters
const router = useRouter();

// Image loading
let imageFile = ref(null);
let imageUrl = ref("/img/static/profile/add-project/placeholder.png");
let arrImageUrl = ref([]);

const onImageChange = (event) => {
  imageFile.value = event.target.files[0];

  const reader = new FileReader();

  reader.onload = (event) => {
    arrImageUrl.value.push(event.target.result);
  };
  reader.readAsDataURL(imageFile.value);
};

// Functions
function postAsset(asset) {
  asset.user_id = localStorage.userId;

  $fetch("/products/add", {
    headers: basicAuth,
    method: "POST",
    baseURL: runtimeConfig.public.apiBase,
    body: asset,
  }).then(function () {
    asset.name = "";
    asset.price = "";
    asset.developer = "";
    asset.images = [];
    asset.description = "";
    asset.keyword = "";
    asset.category_id = "";
    router.push("/profile/projects");
  });
}

const asset = reactive({
  name: "",
  price: "",
  developer: "",
  images: arrImageUrl.value,
  keyword: "",
  category_id: "",
  user_id: localStorage.userId,
});

// Computed
const areAllFiledsFilled = computed(() => {
  if (
    asset.name !== "" &&
    asset.price !== "" &&
    asset.developer !== "" &&
    asset.category_id !== ""
  ) {
    return true;
  } else {
    return false;
  }
});

useHead({
  title: "Roccas | Add Project",
});
</script>

<template>
  <div class="projects">
    <div class="container">
      <div class="projects__wrapper">
        <div class="projects__sidebar">
          <div class="projects__images">
            <h3 class="projects__images-title">
              {{ $t("static.addProject.imagesTitle") }}
            </h3>
            <p class="projects__images-description">
              {{ $t("static.addProject.imagesDescription") }}
            </p>
            <!-- <div class="projects__images-upload" v-if="arrImageUrl.length < 5"> -->
            <div
              class="projects__images-upload"
              v-if="arrImageUrl.length < 1"
            >
              <label for="projects__images-file">
                <img
                  class="projects__images-placeholder"
                  :src="imageUrl"
                />
              </label>

              <input
                id="projects__images-file"
                type="file"
                accept="image/png, image/jpeg"
                @change="onImageChange"
              />
            </div>
            <img
              class="projects__images-uploaded"
              :src="item"
              v-for="item in arrImageUrl"
            />
          </div>
        </div>
        <div class="projects__content">
          <h2 class="projects__title">{{ $t("static.addProject.title") }}</h2>
          <UiInputMain
            class="projects__input"
            theme="primary"
            :placeholder="$t('static.addProject.placeholders[0]')"
            type="text"
            v-model="asset.name"
          />
          <UiInputMain
            class="projects__input"
            theme="primary"
            :placeholder="$t('static.addProject.placeholders[1]')"
            type="number"
            v-model="asset.price"
          />
          <UiInputMain
            class="projects__input"
            theme="primary"
            :placeholder="$t('static.addProject.placeholders[2]')"
            type="text"
            v-model="asset.developer"
          />
          <UiInputMain
            class="projects__input"
            theme="primary"
            :placeholder="$t('static.addProject.placeholders[3]')"
            type="text"
            v-model="asset.keyword"
          />
          <div class="projects__select">
            <select
              class="projects__select-wrapper"
              name="projects__select"
              id="projects__select"
              v-model="asset.category_id"
            >
              <option value="1">
                {{ $t("static.addProject.categoriesSelect[0]") }}
              </option>
              <option value="2">
                {{ $t("static.addProject.categoriesSelect[1]") }}
              </option>
              <option value="3">
                {{ $t("static.addProject.categoriesSelect[2]") }}
              </option>
              <option value="4">
                {{ $t("static.addProject.categoriesSelect[3]") }}
              </option>
            </select>
            <Icon
              class="projects__select-icon"
              name="SelectArrowDown"
              size="20"
            />
          </div>

          <UiButtonMain
            theme="primary"
            :title="$t('static.addProject.button')"
            width="100%"
            :class="{
              disabled: !areAllFiledsFilled,
            }"
            @click="postAsset(asset)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  &__wrapper {
    display: flex;
    margin-top: 50px;
    margin-bottom: 80px;
  }

  &__sidebar {
    width: 250px;
  }

  &__images {
    background-color: #ffffff;
    border: 1px solid #c4c4c4;
    border-radius: 20px;
    padding: 30px;

    &-title {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #3a3a44;
      margin-bottom: 5px;
    }

    &-description {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 120%;
      color: #9191a1;
      margin-bottom: 29px;
    }

    &-placeholder {
      width: 190px;
      height: 100px;
      border-radius: 5px;
      object-fit: contain;
      cursor: pointer;
      margin-bottom: 10px;
    }

    &-upload > input {
      display: none;
    }

    &-uploaded {
      width: 190px;
      height: 100px;
      border-radius: 20px;
      object-fit: cover;
      margin-bottom: 10px;

      display: flex;
      flex-direction: column;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    width: 520px;
    margin-left: 52px;
  }

  &__title {
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #404145;
    margin-bottom: 40px;
  }

  &__subtitle {
    font-weight: 600;
    font-size: 16px;
    line-height: 135%;
    color: #404145;
    margin: 12px 0;
  }

  &__input {
    margin-bottom: 15px;
  }

  &__label {
    font-size: 12px;
    line-height: 120%;
    margin-bottom: 40px;
  }

  &__select {
    position: relative;
    margin-bottom: 15px;

    &-wrapper {
      width: 520px;
      height: 54px;
      background-color: #ffffff;
      border: 1px solid #c4c4c4;
      border-radius: 15px;
      cursor: pointer;
      padding: 15px;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;

      width: 100%;
      appearance: none;
    }

    &-wrapper::placeholder {
      color: #9191a1;
    }

    &-wrapper:hover {
      border: 1px solid #dd6738;
    }

    &-wrapper:focus {
      border: 1px solid #dd6738;
      outline: none;
    }

    &-icon {
      position: absolute;
      right: 10px;
      top: 20px;

      pointer-events: none;
    }
  }
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}

@media (max-width: 425px) {
  .projects {
    &__wrapper {
      flex-direction: column;
    }

    &__sidebar {
      width: 100%;
      text-align: center;
      margin-bottom: 30px;
    }

    &__images-description {
      margin: 0 auto 30px;
    }

    &__images-uploaded {
      margin: 0 auto 30px;
    }

    &__content {
      margin-left: 0;
      width: 100%;
    }

    &__usercard {
      width: 100%;
      margin-bottom: 50px;
    }
  }
}
</style>
