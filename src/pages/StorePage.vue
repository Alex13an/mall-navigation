<template>
  <div class="store-container">
    <MainHeader />
    <div class="store-info">
      <GoBack />
      <div class="store-info__content">
        <img class="store-info__img" :src="getIcon(category.icon)" alt="category" draggable="false" />
        <div class="store-info__data">
          <div class="store-info__title">{{ store.name }}</div>
          <div class="store-info__category">{{ $t(`categories.${store.category}`) }}</div>
        </div>
      </div>
    </div>
    <div class="store-area"></div>
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader';
import GoBack from '../components/GoBack';
import stores from '../config/stores';
import categories from '../config/categories';

export default {
  components: {
    MainHeader,
    GoBack,
  },
  methods: {
    getIcon(icon) {
      return require('./../assets/svg/' + icon + '.svg');
    },
  },
  computed: {
    store() {
      const id = this.$route.params.id;
      return stores.find((s) => s.id == id);
    },
    category() {
      const category = this.store.category;
      return categories[category];
    },
  },
};
</script>

<style lang="scss" scoped>
.store-container {
  height: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
  grid-gap: var(--gutter);
  grid-template-columns: repeat(var(--columns), var(--row-size));
  grid-template-rows: calc(var(--row-size) / 2) calc(var(--row-size) - (var(--gutter) * 2)) calc(
      (var(--row-size) * 5) + (var(--gutter) * 4)
    );
  grid-template-areas:
    'header header header header header header header header header header header header'
    'store-info store-info store-info store-info store-info store-info store-info store-info store-info store-info store-info store-info'
    'store-area store-area store-area store-area store-area store-area store-area store-area store-area store-area store-area store-area';
}

.store-area {
  grid-area: store-area;
  border: 1px solid silver;
}

.store-info {
  grid-area: store-info;
  position: relative;
  &__content {
    color: white;
    display: flex;
    align-items: center;
    margin-left: calc(var(--gutter) * 5);
  }
  &__img {
    display: block;
    width: calc(var(--row-size) * 0.5);
    height: calc(var(--row-size) * 0.5);
    filter: invert(100%) sepia(100%) saturate(2%) hue-rotate(347deg) brightness(104%) contrast(101%);
  }
  &__data {
    margin-left: var(--gutter);
  }
  &__title {
    font-size: calc(var(--gutter) * 1.2);
  }
  &__category {
    font-size: calc(var(--gutter) / 1.6);
  }
}
</style>
