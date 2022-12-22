<template>
    <h1>My Account</h1>
    <router-link :to="{name:'home'}"><button class="foo bar">Home</button></router-link>
    <div v-if="!AuthState.loading">
      <div v-if="!AuthState.isAuthenticated">
        <button @click="login()" class="btn btn-primary">Login</button>
      </div>
  
      <div v-else>
        <p> Welcome to VueAuth <strong>{{ AuthState.user.name }}</strong></p>
        <button @click="logout()" class="btn btn-secondary">Logout</button>
      </div>
    </div>
    
    <div v-else>
      Loading ...
    </div>

</template>
    
<script setup>
import { RouterView,  RouterLink} from 'vue-router';
import { useAuth0, AuthState } from "../utils/useAuth0";
const { login, logout, initAuth } = useAuth0(AuthState);
    
initAuth();
</script>

<script>
export default {
   methods: {
     login() {
       this.$auth0.loginWithRedirect();
     }
   }
 };
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

.btn {
  padding: 8px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  border: none;
  cursor: pointer;
  min-width: 100px;
  border-radius: 4px;
}

.btn-primary {
  margin-top: 20px;
}

.btn-secondary {
  background: #aaa;
  color: white;
}
</style>
