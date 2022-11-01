<template>
  <div class="search-list" :class="isKeyboardVisible ? 'search-list_short' : ''">
    <SearchListItem v-for="store in searchList" :key="store.id" :categoryColor="store.color" :store="store" />
  </div>
</template>

<script>
import SearchListItem from './SearchListItem';

export default {
  props: {
    searchList: Array,
    isKeyboardVisible: Boolean,
  },
  components: {
    SearchListItem,
  },
};
</script>

<style lang="scss" scoped>
.search-list {
  grid-area: search-list;
  max-height: 100%;
  min-height: calc((var(--row-size) * 3));
  display: grid;
  grid-template-rows: repeat(5, var(--row-size));
  grid-auto-flow: column;
  grid-gap: calc(var(--gutter) / 2);
  justify-content: left;
  overflow-y: hidden;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  &_short {
    grid-template-rows: repeat(auto-fill, var(--row-size));
  }
}
</style>
