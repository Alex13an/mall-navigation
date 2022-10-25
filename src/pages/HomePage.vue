<template>
  <div class="grid-container">
    <MainHeader />
    <MainAd />
    <div class="map">Map</div>
    <div class="map-navigation">Navigation</div>
    <div class="search">Search</div>
    <AppsCarousel />
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader';
import MainAd from '../components/MainAd.vue';
import AppsCarousel from '../components/AppsCarousel.vue';

export default {
  components: {
    MainHeader,
    MainAd,
    AppsCarousel,
  },
};
</script>

<style lang="scss" scoped>
.grid-container {
  height: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
  grid-gap: var(--gutter);
  grid-template-columns: repeat(var(--columns), var(--row-size));
  grid-template-rows: calc(var(--row-size) / 2) calc(var(--row-size) * 3) var(--row-size) var(--row-size) var(--row-size);
  grid-template-areas:
    'header header header header header header header header header header header header'
    'map map map map ad ad ad ad ad ad ad ad'
    'nav nav nav search ad ad ad ad ad ad ad ad'
    'apps apps apps apps ad ad ad ad ad ad ad ad'
    'apps apps apps apps ad ad ad ad ad ad ad ad';
  & * {
    border: 1px solid silver;
  }
}

.map {
  grid-area: map;
}

.map-navigation {
  grid-area: nav;
}

.search {
  grid-area: search;
}
</style>
