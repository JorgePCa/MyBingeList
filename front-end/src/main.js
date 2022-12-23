import { createApp } from 'vue'
import './style.css'
import router from './plugins/router'
import App from './App.vue'
import { createAuth0 } from '@auth0/auth0-vue';


createApp(App).use(router).use(
    createAuth0({
      domain: "dev-ztxv7mlnzq07l4p2.us.auth0.com",
      client_id: "r0FAyZOlPqeu8axhLyYfi1yPmwqGpLkH",
      redirect_uri: window.location.origin
    })
  ).mount('#app');