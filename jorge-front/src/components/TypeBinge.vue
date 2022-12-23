<template>
    <img src= getImageUrl(image)/>
    <h2 v-html=" title "></h2>

    <h3>Tag :</h3><h4 v-html=" tag "></h4>
 
    <h3>Description :</h3><h4  v-html=" description "></h4>
    <button @click="">Already Watched</button>
    <button @click="">To Watch</button>
    <br/>
    <br/>
    <router-link :to="{name:'home'}"><button class="foo bar">Home</button></router-link>
</template>

<script setup>
    var image = null;
    var title = null;
    var tag = null;
    var description = null;
    function getImageUrl(name) {
        return new URL(`./dir/${name}.png`, import.meta.url).href
    };

</script>