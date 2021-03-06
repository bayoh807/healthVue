import './css/main.scss';
import { createApp } from 'vue';
import App from '@/view/App.vue';
import router from '@/router';
import store  from '@/store';


createApp(App).
use(router).
use(store).
mount('#app')