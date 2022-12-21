<template>
    <h1>My Account</h1>
    <router-link :to="{name:'home'}"><button class="foo bar">Home</button></router-link>
</template>
    
    <script setup>
    import { RouterView,  RouterLink} from 'vue-router';
    </script>
