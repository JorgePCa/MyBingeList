<template>
<body >

    <v-container fluid ma-0 pa-0 fill-height>
        <v-list lines="one">
           
            <v-list-item
                v-for="item in items"
                :key="item.name"
                :title="item.name"
               
            >
            
                <v-img
                    :src=getPoster(item.poster_path) 
                    @click="toggle"
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

</body>
</template>

<script>
 export default{
    data() {
        return {items:[{poster_path:"",name:""}]}
        
    },
    
    methods: async function(){
        
        const rep = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=ab7fa3f792c17d4471d45e57473b8d62&page=1');
        rep=JSON.parse(rep);
        this.items.poster_path = rep.json().poster_path;
        this.items.name = rep.json().name;
    }
 };
 

</script>
<script setup>

 
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

}

</script>
