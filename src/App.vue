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
      meta: [],
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

body {
  text-rendering: optimizeSpeed;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif;
  line-height: 1.5;
  font-weight: 400;
  font-style: normal;
  user-select: none;
}

:root {
  --columns: 12;
  --content-width: 90vw;
  --gutter: 0.9vw;
  --row-size: calc((var(--content-width) - (var(--gutter) * (var(--columns) - 1))) / var(--columns));
}

.content {
  width: 100%;
  background: #2b5797;
  height: 100vh;
  max-height: 100vh;
}
</style>
