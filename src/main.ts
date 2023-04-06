import { createApp } from 'vue';
import '@/style.scss';
import { createPinia } from 'pinia';
import App from '@/App.vue';

createApp(App)
  .use(createPinia()).mount('#app');
