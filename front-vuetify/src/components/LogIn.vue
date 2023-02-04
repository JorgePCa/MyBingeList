<template>
    <v-h1>Log In</v-h1>
    <v-p v-if="errors.length">
        <v-b>Please correct the following error(s):</v-b>
        <v-list>
            <v-list-item v-for="error in errors">{{ error }}</v-list-item>
        </v-list>
    </v-p>
    <v-div class="form-group">
        <v-label>Username or Email  </v-label>
        <br />
        <v-input type="text" class="form-control" v-model="username" placeholder="Enter username or Email"/>
        <br />
        <br />
    </v-div>
    <v-div class="form-group">
        <v-label for="Password">Password  </v-label>
        <br />           
        <v-input type="password"  class="form-control" v-model="password" placeholder="Enter password"/>
        <br />
        <br />
    </v-div>
    
</template>

<script setup>
var username=null;
var password =null;
var errors=[];
            
</script>
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