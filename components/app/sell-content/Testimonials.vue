<template>
  <section class="testimonials">
    <div class="container">
      <h2 class="testimonials__title">
        {{ $t("static.sellContent.testimonials.title") }}
      </h2>
      <div class="testimonials__wrapper">
        <img
          src="/img/static/sell-content/testimonials.png"
          alt="Testimonial"
          class="testimonials__image"
        />
        <div class="testimonials__text">
          <p class="testimonials__testimonial">
            {{ $t("static.sellContent.testimonials.testimonial") }}
          </p>
          <p class="testimonials__name">
            {{ $t("static.sellContent.testimonials.name") }}
          </p>
          <p class="testimonials__subtitle">
            {{ $t("static.sellContent.testimonials.subtitle") }}
          </p>
          <UiButtonMain
            class="disabled"
            :title="$t('static.sellContent.testimonials.button')"
            theme="primary"
            icon-name="ButtonArrowRight"
            icon-size="18"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.testimonials {
  &__title {
    font-family: "Russo One";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 120%;
    text-align: center;
    color: #3a3a44;
    max-width: 484px;
    margin: 60px auto 40px;
  }

  &__wrapper {
    background-image: url("/img/static/sell-content/banner-testimonials.png");
    padding: 60px;
    border-radius: 30px;
    margin-bottom: 60px;
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
  }

  &__image {
    border-radius: 30px;
  }

  &__testimonial {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.04em;
    color: #3a3a44;
    max-width: 424px;
    margin-bottom: 40px;
  }
  &__name {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.04em;
    color: #3a3a44;
    margin-bottom: 5px;
  }
  &__subtitle {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.04em;
    color: #3a3a44;
    margin-bottom: 45px;
  }
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}

@media (max-width: 425px) {
  .testimonials {
    &__title {
      font-size: 25px;
    }
  }
}
</style>
