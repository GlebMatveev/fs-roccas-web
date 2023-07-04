import { defineStore } from "pinia";

export const useFilterStore = defineStore("filterStore", () => {
  // Filters
  const filters = ref({
    sort_direction: "desc",
    sort_by: "price",
    skip: "0",
    take: "12",
    categories: [],
    price_min: "0",
    price_max: "0",
    rating_min: "0",
  });

  return { filters };
});
