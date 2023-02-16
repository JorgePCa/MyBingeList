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


<script>
    var image = this.$route.query.id;
    var title = null;
    var tag = null;
    var description = null;
 export default{
    data : ()=>({
        items: []
    }),
    mounted: async function(){
        const rep = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=ab7fa3f792c17d4471d45e57473b8d62&with_genres=28&page=10');

    }
 };
 

</script>