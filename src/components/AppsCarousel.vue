<template>
  <div class="carousel">
    <div class="carousel__track">
      <div class="carousel__slide" v-for="category in activeCategories" :key="category.id">
        <CarouselItem :category="category" />
      </div>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { mapGetters } from 'vuex';
import CarouselItem from './CarouselItem';

export default {
  components: {
    CarouselItem,
  },
  data() {
    return {
      scroll: 0,
    };
  },
  computed: {
    ...mapGetters(['activeCategories']),
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  grid-area: apps;
  touch-action: pan-x;
  background: none;
  border: none;
  overflow-x: scroll;
  overflow-y: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  &__track {
    display: grid;
    grid-template-rows: var(--row-size) var(--row-size);
    grid-auto-flow: column;
    grid-gap: var(--gutter);
  }
  &__slide {
    width: var(--row-size);
  }
}
</style>
