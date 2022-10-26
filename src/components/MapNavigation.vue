<template>
  <div class="map-navigation">
    <div class="map-navigation__item size-plus">
      <span class="map-navigation__icon mif-plus"></span>
      <div class="map-navigation__tooltip">{{ $t('mapNavigation.plus') }}</div>
    </div>
    <div class="map-navigation__item size-reset">
      <span class="map-navigation__icon"><span class="mif-dot"></span></span>
      <div class="map-navigation__tooltip">{{ $t('mapNavigation.default') }}</div>
    </div>
    <div class="map-navigation__item size-minus">
      <span class="map-navigation__icon mif-minus"></span>
      <div class="map-navigation__tooltip">{{ $t('mapNavigation.minus') }}</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.map-navigation {
  grid-area: nav;
  background: #00aba9;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    position: relative;
    z-index: 10;
    transition: background-color 0.25s ease;
    &:hover,
    &:focus {
      background-color: rgba($color: #0097aa, $alpha: 0.8);
    }
  }
  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    border: calc(var(--gutter) / 3.5) solid white;
    border-radius: 50%;
    width: calc(var(--gutter) * 3.2);
    height: calc(var(--gutter) * 3.2);
    &:before {
      font-size: calc(var(--gutter) * 1.3);
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

.mif-dot {
  width: var(--gutter);
  height: var(--gutter);
  border-radius: 50%;
  background: white;
}
</style>
