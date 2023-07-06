<script setup>
useHead({
  title: "Roccas | Catalog",
});
</script>

<template>
  <section class="catalog">
    <div class="container">
      <div class="catalog__wrapper">
        <h2 class="catalog__title">
          {{ $t("static.catalog.title") }}
        </h2>
        <UiInputSearch class="catalog__search" />
        <AppCatalogFilterBar />
        <AppCatalogContent />
        <div class="catalog__paginator">
          <AppCatalogPaginator />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.catalog {
  &__wrapper {
    padding: 60px 0;
  }

  &__title {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    color: #3a3a44;
    margin-bottom: 20px;
  }

  &__search {
    margin-bottom: 20px;
  }

  &__paginator {
    display: flex;
    justify-content: center;
  }

  &__projects {
    padding: 40px 0 60px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    &-item:nth-child(1) {
      width: 140px;
    }

    &-item:nth-child(2) {
      width: 140px;
    }

    &-item:nth-child(3) {
      width: 410px;
    }

    &-item:nth-child(4) {
      width: 320px;
    }

    &-item:nth-child(5) {
      width: 140px;
    }

    &-item:nth-child(6) {
      width: 320px;
    }

    &-item:nth-child(7) {
      width: 320px;
    }

    &-item:nth-child(8) {
      width: 320px;
    }

    &-item:nth-child(9) {
      width: 210px;
    }

    &-item:nth-child(10) {
      width: 490px;
    }

    &-item:nth-child(11) {
      width: 210px;
    }

    &-item:nth-child(12) {
      width: 490px;
    }

    &-item:nth-child(13) {
      width: 140px;
    }

    &-item:nth-child(14) {
      width: 140px;
    }

    &-item:nth-child(15) {
      width: 410px;
    }

    &-item:nth-child(16) {
      width: 320px;
    }

    &-item:nth-child(17) {
      width: 140px;
    }

    &-item:nth-child(18) {
      width: 320px;
    }

    &-item:nth-child(19) {
      width: 320px;
    }

    &-item:nth-child(20) {
      width: 320px;
    }

    &-item:nth-child(21) {
      width: 200px;
    }

    &-item:nth-child(22) {
      width: 490px;
    }

    &-item:nth-child(23) {
      width: 205px;
    }

    &-item:nth-child(24) {
      width: 490px;
    }

    &-item:nth-child(25) {
      width: 140px;
    }

    &-item:nth-child(26) {
      width: 140px;
    }

    &-item:nth-child(27) {
      width: 410px;
    }

    &-item:nth-child(28) {
      width: 320px;
    }

    &-item:nth-child(29) {
      width: 140px;
    }

    &-item:nth-child(30) {
      width: 320px;
    }

    &-item:nth-child(31) {
      width: 320px;
    }

    &-item:nth-child(32) {
      width: 320px;
    }

    &-item:nth-child(33) {
      width: 200px;
    }

    &-item:nth-child(34) {
      width: 490px;
    }

    &-item:nth-child(35) {
      width: 205px;
    }

    &-item:nth-child(36) {
      width: 490px;
    }
  }
}

@media (max-width: 1024px) {
  .catalog {
    &__projects {
      justify-content: space-between;

      &-item {
        width: 23% !important;
      }
    }
  }
}

@media (max-width: 768px) {
  .catalog {
    &__projects {
      &-item {
        width: 48% !important;
      }
    }
  }
}

@media (max-width: 425px) {
  .catalog {
    &__projects {
      &-item {
        width: 100% !important;
      }
    }
  }
}
</style>
