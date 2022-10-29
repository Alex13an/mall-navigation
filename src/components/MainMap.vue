<template>
  <div class="map">
    <img class="map__img" src="../assets/images/mockMap.png" alt="mall map" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.map {
  grid-area: map;
  &__img {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
  }
}
</style>
