import { createApp, markRaw } from 'vue';
import App from './App.vue';
// AXIOS
import axios from 'axios';
import VueAxios from 'vue-axios';

// ROUTER
import router from './router/routes';

// Store
import { createPinia } from 'pinia';
const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});

import '../node_modules/swiper/swiper-bundle.css';

const app = createApp(App);

app.use(VueAxios, axios);
app.use(router);
app.use(pinia);
app.mount('#app');

export default pinia;
