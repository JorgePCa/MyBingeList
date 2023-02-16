<script setup>
import { onMounted } from 'vue';
import { ref } from 'vue';

const items = ref([])

var tmp = [];

onMounted(()=>{
    fetch("https://api.themoviedb.org/3/trending/all/day?api_key=ab7fa3f792c17d4471d45e57473b8d62&page=1")
    .then(response => response.json());
    const rep = fetch('https://api.themoviedb.org/3/trending/all/day?api_key=ab7fa3f792c17d4471d45e57473b8d62&page=1');
    console.log(response);

    tmp = response;
    console.log(tmp);
    
    for (var i in rep)
    {
        var item = rep[i];

        items.push({
            "poster_path" : item.poster_path,
            "title" : item.title
        })
    }
    console.log("ITEMS !!!");
    console.log(items);
;
});

function getPoster(poster_path){
    if(poster_path!=null && poster_path!=""){

        var full_link="https://image.tmdb.org/t/p/original/"
        full_link.concat(poster_path);
        console.log(poster_path);
        
        console.log(full_link);
        return full_link;
    }else{
        return "https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg";
    }
    
};

function getMovie(id){

}

</script>

<template>
    <v-container fluid ma-0 pa-0 fill-height>
        <v-list lines="one">
           
            <v-list-item
                v-for="item in items"
                :key="item.name"
                :title="item.name"
               
            >
            
                <v-img
                    :src=getPoster(item.poster_path) 
                    @click="getMovie(item.id)"
                >
                </v-img> 
           
        
            </v-list-item>
            <!-- <v-list-item
                v-for="(item, i) in items"
                :key="i"
                title="fight club"
                cols="12"
                md="6"
            >
            
                <v-img
                    src="https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
                    @click="toggle"
                >
                </v-img> 
               
                
            
            </v-list-item> -->
        </v-list>
       
    </v-container>


</template>


