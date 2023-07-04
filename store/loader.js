import { defineStore } from "pinia";

export const useLoaderStore = defineStore("loadertore", () => {
  // Loader for content
  const loaderContent = ref(false);

  return { loaderContent };
});
