<template>
    <h1>Create Account</h1>
    <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
            <li v-for="error in errors">{{ error }}</li>
        </ul>
    </p>
    <div class="form-group">
        <label for="Email">Email address</label>
        <br />
        <input class="form-control" type="email" v-model="email"  aria-describedby="emailHelp" placeholder="Enter email"/>
        <br />
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        <br />
        <br />
    </div>
    <div class="form-group">
        <label for="Username">Username</label>
        <br />
        <input type="text" class="form-control" v-model="username" placeholder="Enter username"/>
        <br />
        <br />
    </div>
    <div class="form-group">
        <label for="Password">Password</label>
        <br />
        <input type="password"  class="form-control" v-model="password" placeholder="Enter password"/>
        <br />
        <br />
     </div>
    
    <router-link :to="{name:'home'}"> <button class="foo bar" >Send</button></router-link>            
    <router-link :to="{name:'home'}"><button class="foo bar">Home</button></router-link>
    </template>
    
    <script setup>
    var errors = [];
    var email = null;
    var username = null;
    var password = null;

    var checkForm= function(e){
                    if (this.username && this.password && this.email) {
                        return true;
                    }

                    this.errors = [];
                    if (!this.email) {
                        this.errors.push('Email required.');

                    }else if (!this.validEmail(this.email)) {
                        this.errors.push('Valid email required.');
                    }
                    if (!this.username) {
                        this.errors.push('Username required.');
                    }
                    if (!this.password) {
                        this.errors.push('Password required.');
                    
                    }
                    e.preventDefault();
                    
                };
                var validEmail= function (email) {
                    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return re.test(email);
                };
    </script>