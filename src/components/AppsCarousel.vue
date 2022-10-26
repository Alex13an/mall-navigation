<template>
  <Carousel :settings="settings">
    <Slide v-for="category in categories" :key="category.name">
      <CarouselItem :category="category" />
    </Slide>
  </Carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { mapState } from 'vuex';
import { Carousel, Slide } from 'vue3-carousel';
import CarouselItem from './CarouselItem';

export default {
  components: {
    Carousel,
    Slide,
    CarouselItem,
  },
  data() {
    return {
      settings: {
        itemsToShow: 3.9,
        itemsToScroll: 1,
        snapAlign: 'start',
      },
    };
  },
  computed: {
    ...mapState(['categories']),
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  grid-area: apps;
  background: none;
  border: none;
}

:deep(.carousel__track) {
  display: grid;
  grid-template-rows: var(--row-size) var(--row-size);
  grid-auto-flow: column;
  grid-gap: var(--gutter);
}

:deep(.carousel__slide) {
  width: var(--row-size) !important;
}

:deep(.carousel__viewport),
:deep(.carousel__track) {
  height: 100%;
}
</style>
