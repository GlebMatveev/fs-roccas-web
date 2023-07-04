<script setup>
// Props
const props = defineProps({
  modelValue: String,
  theme: String,
  type: String,
  placeholder: String,
  width: String,
  height: String,
  borderRadius: String,
  padding: String,
  color: String,
  backgroundColor: String,
});

// Emits
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <input
    class="input"
    :class="{
      'input--primary': props.theme === 'primary',
      'input--search': props.theme === 'search',
      'input--subscribe': props.theme === 'subscribe',
    }"
    :type="props.type"
    :placeholder="props.placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :style="`height: ${props.height}; width: ${props.width}; border-radius: ${props.borderRadius}; padding: ${props.padding}; color: ${props.color}; background-color: ${props.backgroundColor};`"
  />
</template>

<style lang="scss" scoped>
.input {
  padding: 15px 15px;

  &--primary {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #3a3a44;
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid #c4c4c4;
    border-radius: 15px;
  }
  &--primary::placeholder {
    color: #9191a1;
  }
  &--primary:hover {
    border: 1px solid #dd6738;
  }
  &--primary:focus {
    border: 1px solid #dd6738;
  }

  &--search {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #3a3a44;
    background-color: #fff;
    border: 1px solid #c4c4c4;
    border-radius: 20px;
  }
  &--search::placeholder {
    color: #9191a1;
  }
  &--search:hover {
    border: 1px solid #dd6738;
  }
  &--search:focus {
    border: 1px solid #dd6738;
  }

  &--subscribe {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #3a3a44;
    background-color: #fff;
    border: 1px solid #c4c4c4;
    border-radius: 20px;
  }
  &--subscribe::placeholder {
    color: #9191a1;
  }
  &--subscribe:hover {
    border: 1px solid #dd6738;
  }
  &--subscribe:focus {
    border: 1px solid #dd6738;
  }
}

.input:focus {
  outline: none;
}
</style>
