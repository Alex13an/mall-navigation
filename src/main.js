import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import router from './router';
import store from './store';
import i18next from 'i18next';
import I18NextVue from 'i18next-vue';
import i18n from './i18n';
import '../node_modules/metro4/build/css/metro-icons.css';

const app = createApp(App);

const head = createHead();
i18next.init(i18n);

app.use(I18NextVue, { i18next });
app.use(store).use(router);
app.use(head);

app.mount('#app');
