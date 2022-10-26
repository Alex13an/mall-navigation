<template>
  <div class="carousel-item" :style="styleObject">
    <img class="carousel-item__img" :src="getIcon(category.icon)" alt="category" draggable="false" />
    <div class="carousel-item__tooltip">
      {{ $t(`categories.${category.id}`) }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: Object,
  },
  computed: {
    styleObject: function () {
      return {
        '--color': this.category.color,
      };
    },
  },
  methods: {
    getIcon(icon) {
      return require('./../assets/svg/' + icon + '.svg');
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel-item {
  width: 100%;
  height: 100%;
  color: white;
  font-size: calc(var(--gutter) / 1.6);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color);
    transition: opacity 0.25s ease;
  }
  &:hover,
  &:focus {
    &::before {
      opacity: 0.8;
    }
  }
  &__img {
    display: block;
    width: calc(var(--gutter) * 2.8);
    height: calc(var(--gutter) * 2.8);
    filter: invert(100%) sepia(100%) saturate(2%) hue-rotate(347deg) brightness(104%) contrast(101%);
  }
  &__tooltip {
    text-align: center;
    font-size: calc(var(--gutter) / 1.6);
    width: 100%;
    position: absolute;
    left: 50%;
    bottom: calc(var(--gutter) / 2.5);
    transform: translateX(-50%);
  }
}
</style>
