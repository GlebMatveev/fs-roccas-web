<script setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>

<template>
  <label class="lang">
    <select
      class="lang__wrapper"
      name="lang"
      id="lang"
      v-model="locale"
      @change="(e) => $i18n.setLocaleCookie(e.target.value)"
    >
      <option
        class="countswitcher__option"
        v-for="locale in locales"
        :key="locale.code"
      >
        {{ locale.code }}
      </option>
    </select>
  </label>
</template>

<style lang="scss" scoped>
.lang {
  display: flex;
  align-items: center;

  &__wrapper {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: #3a3a44;
    background-color: transparent;
    border: none;
    outline: none;
    text-transform: uppercase;
    cursor: pointer;
  }
}
</style>
