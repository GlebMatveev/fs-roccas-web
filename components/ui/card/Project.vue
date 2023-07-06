<script setup>
// Props
const props = defineProps({
  project: Object,
  currency: Object,
});

// Functions
function calcCurrencyRate(price) {
  return (parseFloat(price) * parseFloat(props.currency.rate)).toFixed(2);
}

// Image placeholder
const imagePlaceholder = "/img/products/placeholder.jpg";
function replaceImgByDefault(e) {
  e.target.src = imagePlaceholder;
}
</script>

<template>
  <div class="project">
    <NuxtLink :to="'/catalog/' + project.id">
      <img
        :src="`/img/products/${project.image}`"
        alt="Image"
        class="project__image"
        @error="replaceImgByDefault"
      />
      <p class="project__price">
        {{ calcCurrencyRate(project.price) }} {{ props.currency.code }}
      </p>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.project {
  position: relative;
  height: 200px;

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }

  &__price {
    position: absolute;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 120%;
    color: #3a3a44;
    padding: 5px;
    background-color: #f3f3f3;
    border-radius: 10px;
    bottom: 5px;
    right: 5px;
  }
}
</style>
