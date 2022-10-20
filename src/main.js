import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import router from './router';
import store from './store';
import '../node_modules/metro4/build/css/metro.min.css';
import '../node_modules/metro4/build/js/metro.min.js';

const app = createApp(App);
const head = createHead();

app.use(store).use(router);
app.use(head);

app.mount('#app');
