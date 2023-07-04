<script setup>
useHead({
  title: "Roccas | Privacy Policy",
});
</script>

<template>
  <section class="textpage">
    <div class="container">
      <div class="textpage__wrapper">
        <div class="textpage__sidebar">
          <AppTextPageSidebar />
        </div>
        <div class="textpage__content">
          <h2>Lorem, ipsum dolor</h2>
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolor
            eos veniam nemo autem qui consequuntur veritatis dolorum pariatur
            itaque molestias, tenetur possimus et numquam quae excepturi
            blanditiis magnam unde?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            eaque iure! Illum iste debitis aperiam ab nulla praesentium placeat
            error id voluptatem ullam consequuntur quod impedit, in eos modi
            vero reprehenderit obcaecati voluptas fugit. Id eius error nemo ea
            repudiandae maxime dicta enim vitae iusto dolores exercitationem
            magnam a ex recusandae optio quod hic necessitatibus incidunt
            impedit distinctio obcaecati, voluptatem quo! Dolore voluptas
            asperiores esse? Quia, explicabo autem ea inventore dolore quibusdam
            tenetur, sequi, praesentium totam quae rerum sapiente. Ex nobis nemo
            excepturi asperiores corporis fugit debitis quod, voluptas assumenda
            iste quia corrupti labore possimus! Mollitia dolores vel animi nam?
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.textpage {
  padding: 60px 0 80px 0;
  &__wrapper {
    display: flex;
    gap: 60px;
    flex-wrap: wrap;
  }

  &__content {
    max-width: 823px;
  }

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    color: #3a3a44;
    margin-bottom: 20px;
  }

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #3a3a44;
    margin-bottom: 20px;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #3a3a44;
  }
}
</style>
