<template>
    <h1>My Account</h1>
    
    <LogIn/>

</template>
<script setup>
  import LogIn from './LogIn.vue';
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
  cursor: pointer;
  min-width: 100px;
  border-radius: 4px;
}

.btn-primary {
  margin-top: 20px;
}


</style>
