<template>
  <a class="go-back" @click="goBack()">
    <span class="go-back__icon mif-arrow-left"></span>
    <div class="go-back__tooltip">{{ $t('goBack') }}</div>
  </a>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.go-back {
  color: white;
  position: absolute;
  left: 0;
  top: 0;
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
    margin-top: calc(var(--gutter) / 2);
    text-align: center;
    font-size: calc(var(--gutter) / 1.6);
  }
}
</style>
