<template>
  <div class="carousel">
    <div class="carousel__track" :class="isLayoutAlternated ? 'carousel__track_alter' : ''">
      <div class="carousel__slide" v-for="category in activeCategories" :key="category.id">
        <CarouselItem :category="category" />
      </div>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { mapGetters, mapState } from 'vuex';
import CarouselItem from './CarouselItem';

export default {
  components: {
    CarouselItem,
  },
  data() {
    return {
      scrollX: 0,
      isDown: false,
      startX: 0,
    };
  },
  computed: {
    ...mapState(['isLayoutAlternated']),
    ...mapGetters(['activeCategories']),
  },
  methods: {
    onMouseDown(e) {
      this.isDown = true;
      this.startX = e.pageX - this.$el.offsetLeft;
      this.scrollX = this.$el.scrollLeft;
    },
    onMouseLeave() {
      this.isDown = false;
    },
    onMouseUp() {
      this.isDown = false;
    },
    onMouseMove(e) {
      if (!this.isDown) {
        return;
      }
      e.preventDefault();
      const x = e.pageX - this.$el.offsetLeft;
      const dist = x - this.startX;
      this.$el.scrollLeft = this.scrollX - dist;
    },
  },
  mounted() {
    this.$el.addEventListener('mousedown', this.onMouseDown);
    this.$el.addEventListener('mouseleave', this.onMouseLeave);
    this.$el.addEventListener('mouseup', this.onMouseUp);
    this.$el.addEventListener('mousemove', this.onMouseMove);
  },
  unmounted() {
    this.$el.removeEventListener('mousedown', this.onMouseDown);
    this.$el.removeEventListener('mouseleave', this.onMouseLeave);
    this.$el.removeEventListener('mouseup', this.onMouseUp);
    this.$el.removeEventListener('mousemove', this.onMouseMove);
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
    &_alter {
      grid-template-rows: var(--row-size) var(--row-size) var(--row-size);
    }
  }
  &__slide {
    width: var(--row-size);
  }
}
</style>
