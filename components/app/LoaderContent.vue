<template>
  <div class="loader">
    <img
      class="loader__image"
      src="/img/static/loader-content.gif"
      alt="Content loader"
    />
  </div>
</template>

<style lang="scss" scoped>
.loader {
  min-height: 740px;
  display: flex;
  justify-content: center;
  align-items: center;

  &__image {
    width: 100px;
    height: 100px;
  }
}
</style>
