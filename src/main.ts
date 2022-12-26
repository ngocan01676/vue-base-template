import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { componentRegister } from './plugins/component-register';

import App from '@/App.vue';
import router from './router';

import '@assets/main.css';

const app = createApp(App);
componentRegister();
app.use(createPinia());
app.use(router);

app.mount('#app');
