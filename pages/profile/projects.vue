<script setup>
// Stores
import { useCartStore } from "@/store/cart";
const cartStore = useCartStore();

// Environment Variables
const runtimeConfig = useRuntimeConfig();

// Router parameters
const router = useRouter();

// Fetch
const { data: products } = await useFetch(
  runtimeConfig.public.apiBase + "/products/user/" + localStorage.userId
);

const { data: users } = await useFetch(
  runtimeConfig.public.apiBase + "/users/" + localStorage.userId
);
const user = users.value[0];

// Functions
function logout() {
  localStorage.removeItem("userId");
  localStorage.removeItem("userToken");
  router.push("/");
}

// Image placeholder
const imagePlaceholder = "/img/products/placeholder.jpg";
function replaceImgByDefault(e) {
  e.target.src = imagePlaceholder;
}

useHead({
  title: "Roccas | Projects",
});
</script>

<template>
  <section class="projects">
    <div class="container">
      <div class="projects__wrapper">
        <div class="projects__banner">
          <div class="projects__card">
            <img
              :src="user.image"
              alt="User"
              class="projects__card-image"
              @error="replaceImgByDefault"
            />
            <h2 class="projects__card-name">
              {{ user.name }} {{ user.surname }}
            </h2>
            <p class="projects__card-email">
              {{ user.email }}
            </p>
            <p class="projects__card-description">
              {{ user.description }}
            </p>
          </div>
        </div>

        <div class="projects__content">
          <div class="projects__content-topbar">
            <h2 class="projects__content-title">
              {{ $t("static.projects.title") }}
            </h2>
            <UiButtonMain
              :title="$t('static.projects.buttonAdd')"
              theme="primary"
              to="/profile/add-project"
              v-if="products.length > 0"
            />
          </div>
          <div class="projects__content-cards">
            <UiCardProjectProfile
              class="projects__content-item"
              v-for="item in products"
              :project="item"
              :currency="cartStore.currentCurrency"
              v-if="products.length > 0"
            />
            <div
              class="projects__content-noprojects"
              v-if="products.length <= 0"
            >
              <img
                class="projects__content-noprojects-image"
                src="/img/static/profile/projects/noprojects.png"
                alt=""
              />
              <p class="projects__content-noprojects-description">
                {{ $t("static.projects.noprojectsDescription") }}
              </p>
              <UiButtonMain
                class="projects__content-noprojects-button"
                theme="primary"
                :title="$t('static.projects.buttonAdd')"
                to="/profile/add-project"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.projects {
  &__banner {
    background-image: url("/img/static/profile/projects/banner-top.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    height: 320px;
    border-radius: 30px;
    margin-bottom: 200px;
    position: relative;
  }

  &__card {
    position: absolute;
    top: 50%;
    left: 40px;
    width: 260px;
    min-height: 285px;
    background-color: #ffffff;
    box-shadow: 0px 4px 16px rgba(91, 91, 91, 0.24);
    border-radius: 20px;
    padding: 40px;
    text-align: center;

    &-image {
      width: 80px;
      height: 80px;
      border: 2px solid #ffffff;
      border-radius: 50px;
      filter: drop-shadow(0px 4px 16px rgba(91, 91, 91, 0.24));
      margin-bottom: 10px;
    }

    &-name {
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
      color: #3a3a44;
      margin-bottom: 5px;
    }

    &-email {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      color: #9191a1;
      margin-bottom: 20px;
    }

    &-description {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 140%;
      color: #9191a1;
    }
  }

  &__content {
    &-topbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
    }

    &-title {
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 48px;
      color: #3a3a44;
    }

    &-cards {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 140px;
      gap: 20px;
    }

    &-item {
      width: 292px;
    }

    &-noprojects {
      height: 519px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      &-image {
        width: 80px;
        height: 80px;
        margin-top: 100px;
        margin-bottom: 8px;
      }

      &-description {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
        color: #9191a1;
        margin-bottom: 40px;
      }
    }
  }
}

@media (max-width: 1024px) {
  .projects {
    &__sidebar {
      margin-bottom: 20px;
    }

    &__content {
      width: 100%;

      &-item {
        width: 31%;
      }

      &-image {
        width: 100%;
      }
    }
  }
}

@media (max-width: 425px) {
  .projects {
    &__banner {
      background-size: cover;
    }

    &__card {
      left: 50%;
      transform: translate(-50%, 0%);
    }

    &__content {
      &-item {
        width: 100%;
      }
    }
  }
}
</style>
