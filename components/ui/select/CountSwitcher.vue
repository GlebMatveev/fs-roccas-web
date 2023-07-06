<script setup>
// Stores
import { useProductStore } from "@/store/product";
import { useFilterStore } from "@/store/filter";

const productStore = useProductStore();
const filterStore = useFilterStore();
</script>

<template>
  <div
    class="countswitcher"
    v-if="productStore.products"
  >
    <p class="countswitcher__title">{{ $t("countSwitcher.title") }}</p>
    <select
      class="countswitcher__wrapper"
      name="countswitcher"
      id="countswitcher"
      v-model="filterStore.filters.take"
      @change="productStore.getProducts()"
    >
      <option value="12">12</option>
      <option value="24">24</option>
      <option value="36">36</option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
.countswitcher {
  display: flex;
  align-items: center;
  gap: 5px;

  &__title {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    color: #9191a1;
  }

  &__wrapper {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    color: #9191a1;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    cursor: pointer;
  }

  &__wrapper:focus {
    outline: none;
  }
}
</style>
