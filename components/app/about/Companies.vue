<template>
  <section class="companies">
    <div class="container">
      <div class="companies__wrapper">
        <h2 class="companies__title">
          {{ $t("static.about.companies") }}
        </h2>
        <div class="companies__items">
          <img
            src="/img/static/about/companies-01.png"
            alt=""
            class="companies__items-image"
          />
          <img
            src="/img/static/about/companies-02.png"
            alt=""
            class="companies__items-image"
          />
          <img
            src="/img/static/about/companies-03.png"
            alt=""
            class="companies__items-image"
          />
          <img
            src="/img/static/about/companies-04.png"
            alt=""
            class="companies__items-image"
          />
          <img
            src="/img/static/about/companies-05.png"
            alt=""
            class="companies__items-image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.companies {
  &__wrapper {
    padding: 60px 0;
  }

  &__title {
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 120%;
    text-align: center;
    color: #3a3a44;
    margin-bottom: 40px;
  }
  &__items {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 27px 0;
  }
}

@media (max-width: 425px) {
  .companies {
    &__title {
      font-size: 30px;
    }
    &__items {
      flex-direction: column;
      gap: 30px;
    }
  }
}
</style>
