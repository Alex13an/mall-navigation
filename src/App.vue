<template>
  <HomePage />
</template>

<script>
import HomePage from './pages/HomePage';
import { useHead } from '@vueuse/head';

export default {
  setup() {
    useHead({
      title: 'Mall navigation app',
      meta: [
        {
          property: 'metro4:init',
          content: 'false',
        },
      ],
    });
  },
  components: {
    HomePage,
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
