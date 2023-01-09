import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import './scss/variables.scss';

loadFonts();

const app = createApp(App);

// app.component();

app.use(vuetify).mount('#app');

// createApp(App)
//   .use(vuetify)
//   .mount('#app');
