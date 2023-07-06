<template>
  <ul class="links">
    <li class="links__item">
      <NuxtLink
        class="links__item-link"
        to="/terms"
      >
        {{ $t("textPageSidebar.buttons[0]") }}
      </NuxtLink>
      <Icon
        name="TextPageArrowRight"
        size="24"
      />
    </li>
    <li class="links__item">
      <NuxtLink
        class="links__item-link"
        to="/privacy"
      >
        {{ $t("textPageSidebar.buttons[1]") }}
      </NuxtLink>
      <Icon
        name="TextPageArrowRight"
        size="24"
      />
    </li>
    <li class="links__item">
      <NuxtLink
        class="links__item-link"
        to="/cookie"
      >
        {{ $t("textPageSidebar.buttons[2]") }}
      </NuxtLink>
      <Icon
        name="TextPageArrowRight"
        size="24"
      />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.links {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 322px;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  border-radius: 20px;

  &__item {
    border-bottom: 1px solid #c4c4c4;
    padding-bottom: 15px;
    display: flex;
    justify-content: space-between;

    &-link {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      color: #3a3a44;
      display: inline-block;
    }
  }
  &__item:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
}

.router-link-active {
  color: #dd6738;
}

@media (max-width: 425px) {
  .links {
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
