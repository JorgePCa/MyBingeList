<template class="global">
  <v-app :dark="darkMode">
    <!-- Button to toggle the side menu -->
    <v-app-bar app style="background-color: #777777;">
      
      <v-toolbar-title> <v-btn class="toolbartitle" style="font-weight:bold; font-size:x-large; background-color:forestgreen;"  color="black"  to="/">MyBingeList </v-btn></v-toolbar-title>     
      <v-btn
      icon = "mdi-magnify" 
      to="/searchPage">
      </v-btn>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn
            icon="mdi-account"
            v-bind="props"
          >
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in itemLog"
            :key="index" :to="item.action"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>      
      <v-btn icon="mdi-menu" @click="drawer = !drawer"></v-btn>
    </v-app-bar>

    <!-- Side menu -->
    <v-navigation-drawer style="background: linear-gradient(rgba(777, 777, 777, 0.34), rgba(777, 777, 777, 1));;" 
    location="right" v-model="drawer" app>
      <!-- Menu items -->
      <v-list>
        <v-list-item v-for="item in items" 
        :key="item.title" :to="item.action">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <router-view/>
  </v-app>
 
</template>

<script>
export default {
  data() {
    return {
      drawer: false, // initially hide the side menu,
      theme: 'light', // initially light mode,
      items: [
        { title: 'Home', action: '/' },
        { title: 'About', action: '/' },
        { title: 'Contact', action: '/' }
      ],
      itemLog: [
        { title: 'Log In',action: '/myaccount'},
        { title: 'Log Out'}
      ]
    }
  },
  methods: {  
  }
}
</script>

<style>
  .global {
    font-family: 'Ubuntu', sans-serif;
  }
</style>
