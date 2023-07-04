<script setup>
const { t } = useI18n();

const q1 = computed(() => {
  return t("static.sellContent.faq.qaBlock.items[0].question");
});
const a1 = computed(() => {
  return t("static.sellContent.faq.qaBlock.items[0].answer");
});
const q2 = computed(() => {
  return t("static.sellContent.faq.qaBlock.items[1].question");
});
const a2 = computed(() => {
  return t("static.sellContent.faq.qaBlock.items[1].answer");
});
const q3 = computed(() => {
  return t("static.sellContent.faq.qaBlock.items[2].question");
});
const a3 = computed(() => {
  return t("static.sellContent.faq.qaBlock.items[2].answer");
});
const q4 = computed(() => {
  return t("static.sellContent.faq.qaBlock.items[3].question");
});
const a4 = computed(() => {
  return t("static.sellContent.faq.qaBlock.items[3].answer");
});
const q5 = computed(() => {
  return t("static.sellContent.faq.qaBlock.items[4].question");
});
const a5 = computed(() => {
  return t("static.sellContent.faq.qaBlock.items[4].answer");
});
const q6 = computed(() => {
  return t("static.sellContent.faq.qaBlock.items[5].question");
});
const a6 = computed(() => {
  return t("static.sellContent.faq.qaBlock.items[5].answer");
});

const qa = reactive([
  {
    question: q1,
    answer: a1,
    toggle: false,
  },
  {
    question: q2,
    answer: a2,
    toggle: false,
  },
  {
    question: q3,
    answer: a3,
    toggle: false,
  },
  {
    question: q4,
    answer: a4,
    toggle: false,
  },
  {
    question: q5,
    answer: a5,
    toggle: false,
  },
  {
    question: q6,
    answer: a6,
    toggle: false,
  },
]);
</script>

<template>
  <section class="qa">
    <div class="container">
      <AppQaBlock
        :title="$t('static.sellContent.faq.qaBlock.title')"
        :qa="qa"
      />
    </div>
  </section>
</template>
