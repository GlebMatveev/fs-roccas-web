<template>
  <section class="banner"></section>
</template>

<style lang="scss" scoped>
.banner {
  background-image: url("/img/static/home/banner-phone.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 676px;
  margin: 27px 0 16px 0;
}

@media (max-width: 425px) {
  .banner {
    background-size: cover;
  }
}
</style>
