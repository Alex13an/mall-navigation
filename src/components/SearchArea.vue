<template>
  <div class="search-area" @click="onClick">
    <GoBack />
    <div class="search">
      <div class="search__title">{{ $t('search') }}</div>
      <div class="search__container">
        <input type="text" class="search__input" :value="searchText" @focus="onInputFocus" />
        <div class="search__counter">
          {{ $t('storeCounter', { count: searchList.length }) }}
        </div>
      </div>
    </div>
  </div>
  <SimpleKeyboard v-if="isInputFocused" @onChange="onChange" :input="searchText" />
  <SearchList :searchList="searchList" :isKeyboardVisible="isInputFocused" />
</template>

<script>
import SimpleKeyboard from '../components/SimpleKeyboard';
import SearchList from '../components/SearchList';
import GoBack from '../components/GoBack';
import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    SimpleKeyboard,
    SearchList,
    GoBack,
  },
  data() {
    return {
      searchText: '',
    };
  },
  computed: {
    ...mapState(['isInputFocused']),
    searchList() {
      return this.$store.getters.filteredStores(this.searchText, this.$route.params.category);
    },
  },
  methods: {
    ...mapMutations(['SET_INPUT_FOCUSED']),
    onChange(input) {
      this.searchText = input;
    },
    onInputChange(input) {
      this.searchText = input.target.value;
    },
    onInputFocus() {
      this.SET_INPUT_FOCUSED(true);
    },
    onClick(e) {
      if (!document.getElementsByClassName('search')[0]) {
        return;
      }
      if (!e.target || !document.getElementsByClassName('search')[0].contains(e.target)) {
        this.SET_INPUT_FOCUSED(false);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.search-area {
  color: white;
  grid-area: search-area;
  padding: 0 calc(var(--gutter) * 5);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.search {
  position: relative;
  &__title {
    font-size: calc(var(--gutter) * 1.5);
    line-height: var(--gutter);
  }
  &__container {
    margin-top: calc(var(--gutter) * 2);
    display: flex;
    align-items: center;
  }
  &__input {
    width: calc(var(--row-size) * 8);
    height: calc(var(--gutter) * 2);
    background: white;
    color: black;
    border: none;
    font-size: var(--gutter);
    padding-left: calc(var(--gutter) / 2);
  }
  &__counter {
    margin-left: calc(var(--gutter) * 3);
  }
}
</style>
