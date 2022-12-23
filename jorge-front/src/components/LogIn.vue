<script setup>
var username=null;
var password =null;
var errors=[];
</script>


<template>
    <h1>Log In</h1>
    <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
            <li v-for="error in errors">{{ error }}</li>
        </ul>
    </p>
    <div class="form-group">
        <label>Username or Email  </label>
        <br />
        <input type="text" class="form-control" v-model="username" placeholder="Enter username or Email"/>
        <br />
        <br />
    </div>
    <div class="form-group">
        <label for="Password">Password  </label>
        <br />           
        <input type="password"  class="form-control" v-model="password" placeholder="Enter password"/>
        <br />
        <br />
    </div>
    
    <router-link :to="{name:'home'}"> <button class="foo bar" >Send</button></router-link>            
    <router-link :to="{name:'home'}"><button class="foo bar">Home</button></router-link>
    
</template>

<script>   
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