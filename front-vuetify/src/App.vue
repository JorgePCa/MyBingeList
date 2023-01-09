<template class="global">
  <v-app :dark="darkMode">
    <!-- Button to toggle the side menu -->
    <v-app-bar app>
      <v-toolbar-title class="toolbartitle" color="primary" style="font-weight:bold; font-size:x-large;" >My Binge List</v-toolbar-title>
      <v-btn icon="mdi-account" @click="drawer = !drawer"></v-btn>
      <v-btn @click="toggleTheme" text rounded>Toggle Theme</v-btn>
    </v-app-bar>

    <!-- Side menu -->
    <v-navigation-drawer style="background: linear-gradient(rgba(82, 231, 69, 0.34), rgba(143, 221, 136, 0.34));;" 
    location="right" v-model="drawer" app>
      <!-- Menu items -->
      <v-list>
        <v-list-item v-for="item in items" 
        :key="item.title" @click="item.action">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {title: 'Action 1' },
        {title: 'Action 2' },
      ],
      drawer: false, // initially hide the side menu,
      theme: 'light', // initially light mode,
      items: [
        { title: 'Home', action: () => {} },
        { title: 'About', action: () => {} },
        { title: 'Contact', action: () => {} }
      ]
    }
  },
  methods: {
    toggleTheme(){
      if (this.theme === 'light') {
      this.theme = 'dark'
    } else {
      this.theme = 'light'
    }
    }
  }
}
</script>

<style>
  .global {
    font-family: 'Ubuntu', sans-serif;
  }
</style>
