<template>
  <router-link class="search-item" :style="styleObject" :to="{ name: 'store', params: { id: store.id } }">
    <div class="search-item__title">
      {{ store.name }}
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    store: Object,
    categoryColor: String,
  },
  computed: {
    styleObject: function () {
      return {
        '--color': this.categoryColor,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.search-item {
  color: white;
  width: calc(var(--row-size) * 2);
  padding: var(--gutter);
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
  &__title {
    position: relative;
    z-index: 10;
  }
}
</style>
