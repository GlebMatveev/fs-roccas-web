<template>
  <section class="productivity">
    <div class="container">
      <div class="productivity__wrapper">
        <h2 class="productivity__title">
          {{ $t("static.business.productivity.title") }}
        </h2>
        <div class="productivity__items">
          <div class="productivity__items-card">
            <Icon
              name="BusinessProductivity01"
              size="42"
            />
            <div class="productivity__items-text">
              <h2 class="productivity__items-title">
                {{ $t("static.business.productivity.items[0].title") }}
              </h2>
              <p class="productivity__items-description">
                {{ $t("static.business.productivity.items[0].description") }}
              </p>
            </div>
          </div>
          <div class="productivity__items-card">
            <Icon
              name="BusinessProductivity02"
              size="42"
            />
            <div class="productivity__items-text">
              <h2 class="productivity__items-title">
                {{ $t("static.business.productivity.items[1].title") }}
              </h2>
              <p class="productivity__items-description">
                {{ $t("static.business.productivity.items[1].description") }}
              </p>
            </div>
          </div>
          <div class="productivity__items-card">
            <Icon
              name="BusinessProductivity03"
              size="42"
            />
            <div class="productivity__items-text">
              <h2 class="productivity__items-title">
                {{ $t("static.business.productivity.items[2].title") }}
              </h2>
              <p class="productivity__items-description">
                {{ $t("static.business.productivity.items[2].description") }}
              </p>
            </div>
          </div>
          <div class="productivity__items-card">
            <Icon
              name="BusinessProductivity04"
              size="42"
            />
            <div class="productivity__items-text">
              <h2 class="productivity__items-title">
                {{ $t("static.business.productivity.items[3].title") }}
              </h2>
              <p class="productivity__items-description">
                {{ $t("static.business.productivity.items[3].description") }}
              </p>
            </div>
          </div>
          <div class="productivity__items-card">
            <Icon
              name="BusinessProductivity05"
              size="42"
            />
            <div class="productivity__items-text">
              <h2 class="productivity__items-title">
                {{ $t("static.business.productivity.items[4].title") }}
              </h2>
              <p class="productivity__items-description">
                {{ $t("static.business.productivity.items[4].description") }}
              </p>
            </div>
          </div>
          <div class="productivity__items-card">
            <Icon
              name="BusinessProductivity06"
              size="42"
            />
            <div class="productivity__items-text">
              <h2 class="productivity__items-title">
                {{ $t("static.business.productivity.items[5].title") }}
              </h2>
              <p class="productivity__items-description">
                {{ $t("static.business.productivity.items[5].description") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.productivity {
  &__wrapper {
    padding: 90px 0;
  }
  &__title {
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 120%;
    color: #3a3a44;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 40px;
  }

  &__items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &-card {
      display: flex;
      gap: 20px;
    }
    &-title {
      max-width: 300px;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 120%;
      color: #3a3a44;
      margin-bottom: 10px;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    &-description {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #3a3a44;
      min-height: 96px;
      width: 299px;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
}

@media (max-width: 425px) {
  .productivity {
    &__title {
      font-size: 25px;
    }
  }
}
</style>
