<template>
  <section class="timeline">
    <div class="container">
      <div class="timeline__wrapper">
        <!-- <h2 class="timeline__title">Some of our milestones</h2>
        <div class="timeline__items"></div> -->
        <img
          src="/img/static/about/timeline.png"
          alt=""
          class="timeline__image"
        />
        <img
          src="/img/static/about/timeline-mobile.png"
          alt=""
          class="timeline__image-mobile"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.timeline {
  padding: 60px 0;

  &__image {
    width: 100%;
    border-radius: 30px;
    object-fit: contain;
  }

  &__image-mobile {
    display: none;
    width: 100%;
    border-radius: 30px;
    object-fit: contain;
  }
}

@media (max-width: 425px) {
  .timeline {
    width: 100%;

    &__image {
      display: none;
    }
    &__image-mobile {
      display: block;
    }
  }
}
</style>
