<script setup>
// Stores
import { useProductStore } from "@/store/product";
import { useFilterStore } from "@/store/filter";

const productStore = useProductStore();
const filterStore = useFilterStore();
</script>

<template>
  <div class="sortswitcher">
    <p class="sortswitcher__title">{{ $t("sortSwitcher.title") }}</p>
    <select
      class="sortswitcher__wrapper"
      name="sortswitcher"
      id="sortswitcher"
      v-model="filterStore.filters.sort_direction"
      @change="productStore.getProducts()"
    >
      <option value="desc">
        {{ $t("sortSwitcher.options[0]") }}
      </option>
      <option value="asc">
        {{ $t("sortSwitcher.options[1]") }}
      </option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
.sortswitcher {
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
    font-weight: 700;
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
