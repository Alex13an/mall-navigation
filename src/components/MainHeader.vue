<template>
  <div class="main-header">{{ $t('mainTitle') }}</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-header {
  grid-area: header;
  color: white;
  font-weight: bold;
  font-size: calc(var(--gutter) * 1.5);
  display: flex;
  align-items: center;
  padding-left: calc(var(--gutter) * 1.3);
  background: #00aba9;
}

.header-button {
  grid-area: home-button;
}
</style>
