<template>
  <div class="grid-container" :class="isLayoutAlternated ? 'grid-container_alternate' : ''">
    <MainHeader />
    <MainAd />
    <MainMap />
    <MapNavigation />
    <MainSearch />
    <AppsCarousel />
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader';
import MainAd from '../components/MainAd';
import MapNavigation from '../components/MapNavigation';
import MainSearch from '../components/MainSearch';
import AppsCarousel from '../components/AppsCarousel';
import MainMap from '../components/MainMap';
import { mapState } from 'vuex';

export default {
  components: {
    MainHeader,
    MainAd,
    MapNavigation,
    AppsCarousel,
    MainSearch,
    MainMap,
  },
  computed: {
    ...mapState(['isLayoutAlternated']),
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
  grid-template-rows: calc(var(--row-size) / 2) calc(var(--row-size) * 3) var(--row-size) var(--row-size) var(
      --row-size
    );
  grid-template-areas:
    'header header header header header header header header header header header header'
    'map map map map ad ad ad ad ad ad ad ad'
    'nav nav nav search ad ad ad ad ad ad ad ad'
    'apps apps apps apps ad ad ad ad ad ad ad ad'
    'apps apps apps apps ad ad ad ad ad ad ad ad';
  &_alternate {
    grid-template-areas:
      'header header header header header header header header header header header header'
      'ad ad ad ad ad map map map map map map map'
      'apps apps apps apps apps map map map map map map map'
      'apps apps apps apps apps map map map map map map map'
      'apps apps apps apps apps nav nav nav nav nav nav search';
  }
}
</style>
