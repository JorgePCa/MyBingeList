import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import './style.css';
import { createAuth0 } from '@auth0/auth0-vue';

loadFonts();

const app = createApp(App);

// app.component();

// createApp(App)
//   .use(vuetify)
//   .mount('#app');


app.use(vuetify).use(router).use(
    createAuth0({
      domain: "dev-ztxv7mlnzq07l4p2.us.auth0.com",
      client_id: "r0FAyZOlPqeu8axhLyYfi1yPmwqGpLkH",
      redirect_uri: window.location.origin
    })
  ).mount('#app');
