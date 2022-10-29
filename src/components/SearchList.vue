<template>
  <div class="search-list" :class="isKeyboardVisible ? 'search-list_short' : ''">
    <SearchListItem
      v-for="store in filteredStores(searchText, $route.params.category)"
      :key="store.name"
      :categoryColor="store.color"
      :store="store"
    />
  </div>
</template>

<script>
import SearchListItem from './SearchListItem';
import { mapGetters } from 'vuex';

export default {
  props: {
    searchText: String,
    isKeyboardVisible: Boolean,
  },
  components: {
    SearchListItem,
  },
  computed: {
    ...mapGetters(['filteredStores']),
  },
};
</script>

<style lang="scss" scoped>
.search-list {
  max-height: 100%;
  min-height: calc((var(--row-size) * 3) + (var(--gutter) * 2));
  display: grid;
  grid-template-rows: repeat(5, var(--row-size));
  grid-auto-flow: column;
  grid-gap: calc(var(--gutter) / 2);
  justify-content: left;
  overflow-x: auto;
  &_short {
    grid-template-rows: repeat(auto-fill, var(--row-size));
  }
}
</style>
