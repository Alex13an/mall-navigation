import { createStore } from 'vuex';
import categories from '../config/categories';
import stores from '../config/stores';

export default createStore({
  state: {
    searchCategory: '',
  },
  getters: {
    activeCategories() {
      const keys = Object.keys(categories);
      return keys.reduce((arr, key) => {
        arr.push({
          id: key,
          ...categories[key],
        });
        return arr;
      }, []);
    },

    filteredStores: () => (filter, category) => {
      let filteredStores = stores;
      if (category) {
        filteredStores = filteredStores.filter((store) => store.category === category);
      }
      if (filter) {
        filteredStores = filteredStores.filter((store) => store.name.toLowerCase().includes(filter.toLowerCase()));
      }
      return filteredStores.map((store) => ({
        ...categories[store.category],
        ...store,
      }));
    },
  },
});
