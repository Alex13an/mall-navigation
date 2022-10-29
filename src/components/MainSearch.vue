<template>
  <router-link class="search" :to="{ name: 'search' }">
    <span class="mif-search search__icon"></span>
    <div class="search__tooltip">{{ $t('search') }}</div>
  </router-link>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.search {
  grid-area: search;
  color: white;
  position: relative;
  background: #2d89ef;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.25s ease;
  &:hover,
  &:focus {
    background-color: rgba($color: #0097aa, $alpha: 0.8);
  }
  &__icon {
    &:before {
      font-size: calc(var(--gutter) * 2.8);
    }
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
