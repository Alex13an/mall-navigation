<template>
  <div class="search-container" :class="!isInputFocused ? 'search-container_keyboard' : ''">
    <MainHeader />
    <SearchArea />
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader';
import SearchArea from '../components/SearchArea';
import { mapState } from 'vuex';

export default {
  components: {
    MainHeader,
    SearchArea,
  },
  computed: {
    ...mapState(['isInputFocused']),
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
  grid-template-rows: calc(var(--row-size) / 2) var(--row-size) calc((var(--row-size) * 2));
  grid-template-areas:
    'header header header header header header header header header header header header'
    'search-area search-area search-area search-area search-area search-area search-area search-area search-area search-area search-area search-area'
    'keyboard keyboard keyboard keyboard keyboard keyboard keyboard keyboard keyboard keyboard keyboard keyboard'
    'search-list search-list search-list search-list search-list search-list search-list search-list search-list search-list search-list search-list';
  &_keyboard {
    grid-template-rows: calc(var(--row-size) / 2) var(--row-size) calc((var(--row-size) * 5) + (var(--gutter) * 2));
    grid-template-areas:
      'header header header header header header header header header header header header'
      'search-area search-area search-area search-area search-area search-area search-area search-area search-area search-area search-area search-area'
      'search-list search-list search-list search-list search-list search-list search-list search-list search-list search-list search-list search-list';
  }
}
</style>
