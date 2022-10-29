<template>
  <div class="search-area" @click="onClick">
    <router-link class="go-back" :to="{ name: 'home' }">
      <span class="go-back__icon mif-arrow-left"></span>
      <div class="go-back__tooltip">{{ $t('goBack') }}</div>
    </router-link>
    <div class="search">
      <div class="search__title">{{ $t('search') }}</div>
      <input type="text" class="search__input" :value="searchText" @focus="onInputFocus" />
      <SimpleKeyboard v-if="isInputFocused" @onChange="onChange" @onKeyPress="onKeyPress" :input="searchText" />
    </div>
    <SearchList :searchText="searchText" :isKeyboardVisible="isInputFocused" />
  </div>
</template>

<script>
import SimpleKeyboard from '../components/SimpleKeyboard';
import SearchList from '../components/SearchList';

export default {
  components: {
    SimpleKeyboard,
    SearchList,
  },
  data() {
    return {
      searchText: '',
      isInputFocused: false,
    };
  },
  methods: {
    onChange(input) {
      this.searchText = input;
    },
    onInputChange(input) {
      this.searchText = input.target.value;
    },
    onInputFocus() {
      this.isInputFocused = true;
    },
    onClick(e) {
      if (!e.target || !document.getElementsByClassName('search')[0].contains(e.target)) {
        this.isInputFocused = false;
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
  &__title {
    font-size: calc(var(--gutter) * 1.5);
    line-height: var(--gutter);
  }
  &__input {
    margin-top: calc(var(--gutter) * 2);
    margin-bottom: var(--gutter);
    width: calc(var(--row-size) * 8);
    height: calc(var(--gutter) * 2);
  }
}

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
