import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import PrimeVue from 'primevue/config';

import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';

import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primevue/resources/themes/saga-blue/theme.css';

const app = createApp(App);
app.use(store);
app.use(router);
app.use(PrimeVue);

app.component('Button', Button);
app.component('InputNumber', InputNumber);

app.mount('#app');