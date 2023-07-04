<template>
  <section class="text">
    <div class="container">
      <p class="text__text">
        {{ $t("static.about.text[0]") }}
      </p>
      <p class="text__text">
        {{ $t("static.about.text[1]") }}
      </p>
      <p class="text__text">
        {{ $t("static.about.text[2]") }}
      </p>
      <p class="text__text">
        {{ $t("static.about.text[3]") }}
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.text {
  padding-bottom: 60px;

  &__text {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    color: #3a3a44;
    text-align: center;
  }
}
</style>
