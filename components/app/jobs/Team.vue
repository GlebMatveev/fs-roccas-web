<template>
  <section class="team">
    <div class="container">
      <div class="team__wrapper">
        <h2 class="team__title">
          {{ $t("static.jobs.team.title") }}
        </h2>
        <p class="team__description">
          {{ $t("static.jobs.team.description") }}
        </p>
        <div class="team__items">
          <div class="team__items-card">
            <Icon
              class="team__items-icon"
              name="JobsTeam01"
              size="42"
            />
            <h3 class="team__items-title">
              {{ $t("static.jobs.team.items[0].title") }}
            </h3>
            <p class="team__items-subtitle">
              {{ $t("static.jobs.team.items[0].subtitle") }}
            </p>
          </div>
          <div class="team__items-card">
            <Icon
              class="team__items-icon"
              name="JobsTeam02"
              size="42"
            />
            <h3 class="team__items-title">
              {{ $t("static.jobs.team.items[1].title") }}
            </h3>
            <p class="team__items-subtitle">
              {{ $t("static.jobs.team.items[1].subtitle") }}
            </p>
          </div>
          <div class="team__items-card">
            <Icon
              class="team__items-icon"
              name="JobsTeam03"
              size="42"
            />
            <h3 class="team__items-title">
              {{ $t("static.jobs.team.items[2].title") }}
            </h3>
            <p class="team__items-subtitle">
              {{ $t("static.jobs.team.items[2].subtitle") }}
            </p>
          </div>
          <div class="team__items-card">
            <Icon
              class="team__items-icon"
              name="JobsTeam04"
              size="42"
            />
            <h3 class="team__items-title">
              {{ $t("static.jobs.team.items[3].title") }}
            </h3>
            <p class="team__items-subtitle">
              {{ $t("static.jobs.team.items[3].subtitle") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.team {
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
    margin-bottom: 20px;
  }
  &__description {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    color: #dd6738;
    text-align: center;
    max-width: 750px;
    margin: 0 auto;
    margin-bottom: 40px;
  }

  &__items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 10px;

    &-icon {
      margin-bottom: 25px;
    }
    &-card {
      background-color: #3a3a44;
      border-radius: 20px;
      padding: 25px 25px 20px;
      max-width: 292px;
    }
    &-title {
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 120%;
      color: #ffffff;
      margin-bottom: 5px;
    }
    &-subtitle {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #c4c4c4;
    }
  }
}

@media (max-width: 1024px) {
  .team {
    &__items {
      &-card {
        min-width: 100%;
      }
    }
  }
}

@media (max-width: 425px) {
  .team {
    &__title {
      font-size: 30px;
    }
  }
}
</style>
