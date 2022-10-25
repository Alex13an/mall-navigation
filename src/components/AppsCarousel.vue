<template>
  <Carousel :settings="settings">
    <Slide v-for="slide in 12" :key="slide">
      <div class="apps-carousel">
        <div v-for="item in 2" class="apps-carousel__item" :key="item">appItem</div>
      </div>
    </Slide>
  </Carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      settings: {
        itemsToShow: 4,
        itemsToScroll: 1,
        snapAlign: 'start',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  grid-area: apps;
  background: none;
  border: none;
}

:deep(.carousel__viewport),
:deep(.carousel__track) {
  height: 100%;
}

:deep(.carousel__slide) {
  width: var(--row-size) !important;
  margin-right: var(--gutter);
}

.apps-carousel {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: var(--row-size) var(--row-size);
  grid-gap: var(--gutter);

  &__item {
    border: 1px solid silver;
  }
}
</style>
