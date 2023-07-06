<script setup>
// Stores
import { useProductStore } from "@/store/product";
import { useFilterStore } from "@/store/filter";

const productStore = useProductStore();
const filterStore = useFilterStore();

// Router parameters
const router = useRouter();

// Functions
function applyFilterAndRouterPush(category) {
  filterStore.filters.categories = [category];
  filterStore.filters.skip = 0;
  productStore.getProducts();
  router.push("/catalog/");
}

function clearFilterAndRouterPush() {
  filterStore.filters.categories = [];
  filterStore.filters.skip = 0;
  productStore.getProducts();
  router.push("/catalog/");
}

function updateCategoriesCheckbox(id) {
  let index = filterStore.filters.categories.indexOf(id);

  if (id == "0" && filterStore.filters.categories.length <= 0) {
    return true;
  } else {
    if (~index) {
      return true;
    } else {
      return false;
    }
  }
}
</script>

<template>
  <div class="bar">
    <ul class="bar__categories">
      <li
        class="bar__categories-item"
        :class="{
          'bar__categories-item--active': updateCategoriesCheckbox('0'),
        }"
        @click="clearFilterAndRouterPush()"
      >
        <p>{{ $t("static.catalog.categories[0]") }}</p>
      </li>
      <li
        class="bar__categories-item"
        :class="{
          'bar__categories-item--active': updateCategoriesCheckbox('1'),
        }"
        @click="applyFilterAndRouterPush('1')"
      >
        <p>{{ $t("static.catalog.categories[1]") }}</p>
      </li>
      <li
        class="bar__categories-item"
        :class="{
          'bar__categories-item--active': updateCategoriesCheckbox('2'),
        }"
        @click="applyFilterAndRouterPush('2')"
      >
        <p>{{ $t("static.catalog.categories[2]") }}</p>
      </li>
      <li
        class="bar__categories-item"
        :class="{
          'bar__categories-item--active': updateCategoriesCheckbox('3'),
        }"
        @click="applyFilterAndRouterPush('3')"
      >
        <p>{{ $t("static.catalog.categories[3]") }}</p>
      </li>
      <li
        class="bar__categories-item"
        :class="{
          'bar__categories-item--active': updateCategoriesCheckbox('4'),
        }"
        @click="applyFilterAndRouterPush('4')"
      >
        <p>{{ $t("static.catalog.categories[4]") }}</p>
      </li>
    </ul>

    <div class="bar__filters">
      <UiSelectSortSwitcher />
      <UiSelectCountSwitcher />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__categories {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    &-item {
      padding: 14px 20px;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #3a3a44;
      border: 1px solid #dd6738;
      backdrop-filter: blur(15px);
      border-radius: 20px;
      cursor: pointer;
    }

    &-item--active {
      color: #ffffff;
      background-color: #dd6738;
    }
  }

  &__filters {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
}

@media (max-width: 768px) {
  .bar {
    &__filters {
      justify-content: flex-end;
    }
  }
}

@media (max-width: 768px) {
  .bar {
    flex-wrap: wrap;
    gap: 20px;

    &__filters {
      width: 100%;
    }
  }
}
</style>
