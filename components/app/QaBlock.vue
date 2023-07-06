<script setup>
//Props
const props = defineProps({
  title: String,
  qa: Object,
});
</script>

<template>
  <section class="qa-block">
    <h2 class="qa-block__title">{{ props.title }}</h2>
    <div
      class="qa-block__wrapper"
      :class="{ 'qa-block__wrapper--active': item.toggle }"
      v-for="item in props.qa"
      @click="item.toggle = !item.toggle"
    >
      <div class="qa-block__question-block">
        <h3 class="qa-block__question">
          {{ item.question }}
        </h3>
        <Icon
          class="filter__item-icon"
          v-if="item.toggle"
          name="QaBlockArrowDownActive"
          size="24"
        />
        <Icon
          class="filter__item-icon"
          v-else
          name="QaBlockArrowDown"
          size="24"
        />
      </div>
      <p
        class="qa-block__answer"
        v-if="item.toggle"
      >
        {{ item.answer }}
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.qa-block {
  padding: 60px 0;

  &__title {
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 120%;
    color: #3a3a44;
    text-align: center;
    margin-bottom: 40px;
  }

  &__wrapper {
    padding: 30px 20px;
    background-color: #ffffff;
    border: 1px solid #c4c4c4;
    border-radius: 20px;
    cursor: pointer;
    margin-bottom: 10px;
  }

  &__wrapper--active {
    color: #fff;
  }

  &__question-block {
    display: flex;
    justify-content: space-between;
  }

  &__question {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    color: #3a3a44;
  }

  &__answer {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.04em;
    color: #3a3a44;
    margin-top: 20px;
  }
}

@media (max-width: 425px) {
  .qa-block {
    &__title {
      font-size: 25px;
    }

    &__question {
      width: 80%;
    }
  }
}
</style>
