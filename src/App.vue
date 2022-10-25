<template>
  <div class="content">
    <HomePage />
  </div>
</template>

<script>
import HomePage from './pages/HomePage.vue';
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

:root {
  --columns: 12;
  --content-width: 90vw;
  --gutter: 0.9vw;
  --row-size: calc((var(--content-width) - (var(--gutter) * (var(--columns) - 1))) / var(--columns));
}

.content {
  width: 100%;
  background: #004e9e;
  height: 100vh;
  max-height: 100vh;
}
</style>
