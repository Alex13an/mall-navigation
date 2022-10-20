<template>
  <HomePage />
</template>

<script>
import HomePage from './pages/HomePage';
import Metro from './metro/js/metro-4.4.3';

export default {
  components: {
    HomePage,
  },
  mounted() {
    Metro.init();
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
