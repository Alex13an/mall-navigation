<template>
  <div class="search-container">
    <MainHeader />
    <SearchArea />
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader';
import SearchArea from '../components/SearchArea';

export default {
  components: {
    MainHeader,
    SearchArea,
  },
  props: {
    initialCategory: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.search-container {
  height: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
  grid-gap: var(--gutter);
  grid-template-columns: repeat(var(--columns), var(--row-size));
  grid-template-rows: calc(var(--row-size) / 2) calc((var(--row-size) * 6) + (var(--gutter) * 3));
  grid-template-areas:
    'header header header header header header header header header header header header'
    'search-area search-area search-area search-area search-area search-area search-area search-area search-area search-area search-area search-area';
}
</style>
