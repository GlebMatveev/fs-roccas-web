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
    </NuxtLink>
    <p class="project__title">
      {{ project.name }}
    </p>
    <p class="project__price">
      {{ calcCurrencyRate(project.price) }} {{ props.currency.code }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.project {
  width: 100%;

  &__image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 20px;
    margin-bottom: 10px;
  }

  &__title {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #3a3a44;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 10px;
    padding: 0 10px;
  }

  &__price {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #3a3a44;
    padding: 0 10px;
  }
}
</style>
