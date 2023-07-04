<script setup>
// Props
const props = defineProps({
  title: String,
  theme: String,
  width: String,
  height: String,
  borderRadius: String,
  padding: String,
  to: String,
  iconName: String,
  iconSize: String,
  loader: Boolean,
  loaderPath: String,
  color: String,
  backgroundColor: String,
});
</script>

<template>
  <NuxtLink :to="props.to">
    <button
      class="button"
      :class="{
        'button--primary': props.theme === 'primary',
        'button--secondary': props.theme === 'secondary',
        'button--white': props.theme === 'white',
        'button--transparent': props.theme === 'transparent',
        'button--error': props.theme === 'error',
      }"
      :style="`height: ${props.height}; width: ${props.width}; border-radius: ${props.borderRadius}; padding: ${props.padding}; color: ${props.color}; background-color: ${props.backgroundColor};`"
    >
      <p v-if="!loader">{{ props.title }}</p>
      <Icon
        v-if="iconName && iconSize && !loader"
        :name="iconName"
        :size="iconSize"
      />

      <img
        v-if="loader"
        :src="loaderPath"
        alt="Loader"
        class="button__loader"
      />
    </button>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.button {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  padding: 16px 30px;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;

  &--primary {
    background-color: #dd6738;
    color: #fff;
    text-transform: uppercase;
  }

  &--secondary {
    background-color: #3a3a44;
    color: #fff;
    text-transform: uppercase;
  }

  &--white {
    background-color: #fff;
    color: #dd6738;
    border: 1px solid #c4c4c4;
    border-radius: 20px;
  }

  &--transparent {
    background-color: transparent;
    color: #fff;
    border: 1px solid #dd6738;
    text-transform: uppercase;
  }

  &--error {
    border: 1px solid #dd6738;
    background-color: #fff;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #dd6738;
  }

  &__loader {
    height: 30px;
  }
}
</style>
