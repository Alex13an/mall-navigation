<template>
  <div class="map">
    <MallMap />
  </div>
</template>

<script>
import MallMap from '../map/MallMap';

export default {
  components: {
    MallMap,
  },
};
</script>

<style lang="scss" scoped>
.map {
  grid-area: map;
}
</style>
