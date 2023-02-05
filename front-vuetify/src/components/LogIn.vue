<template>
    <h1>Log In</h1>
    <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <v-list>
            <v-list-item v-for="error in errors">{{ error }}</v-list-item>
        </v-list>
    </p>
    <div class="form-group">
        <v-label style="color: black;">Username or Email  </v-label>
        <br />
        <input type="text" class="form-control" v-model="username" placeholder="Enter username or Email"/>
        <br />
        <br />
    </div>
    <div class="form-group">
        <v-label for="Password" style="color: black;">Password </v-label>
        <br />           
        <input type="password" class="form-control" v-model="password" placeholder="Enter password"/>
        <br />
        <br />
        <v-btn> Login </v-btn>
    </div>
    <div v-if="!AuthState.loading">
      <div v-if="!AuthState.isAuthenticated">
        <v-btn @click="login()" class="btn btn-primary" color="white">Login with Gmail</v-btn>
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
import { useAuth0, AuthState } from "../utils/useAuth0";
var username=null;
var password =null;
var errors=[];

const { login, logout, initAuth } = useAuth0(AuthState);
    
initAuth();

var checkForm= function(){
        if(this.username){
        if(validEmail(this.username)){
            if(this.password){return true;}
        }else{
            if(this.password){return true;}
            }
        }
               

        this.errors = [];
        if (!this.username) {
            this.errors.push('Username required.');
            return false;
        }
        if (!this.password) {
            this.errors.push('Password required.');
            return false;
                
        }
        
                
    };
    var validEmail= function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
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