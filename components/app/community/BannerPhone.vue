<template>
  <section class="banner"></section>
</template>

<style lang="scss" scoped>
.banner {
  background-image: url("/img/static/community/banner-phone.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 649px;
}

@media (max-width: 425px) {
  .banner {
    background-size: cover;
  }
}
</style>
