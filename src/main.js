import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import your Vue Router configuration
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const app = createApp(App);
app.use(router); // Use Vue Router
app.mount('#app');
