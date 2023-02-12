<template>

    <v-card
        max-width="10000"
        class="mx-auto"
    >
        <v-container fluid ma-0 pa-0 fill-height>
        <v-item-group
            v-model="selected"
            multiple
        >
            <v-row>
            <v-col
                v-for="(item, i) in items"
                :key="i"
                cols="12"
                md="6"
            >
                <v-item v-slot="{ active, toggle }">
                <v-img
                    :src=getPoster(item.poster_path)
                    height="150"
                    class="text-right pa-2"
                    @click="toggle"
                >
                </v-img>

                </v-item>
            </v-col>
            </v-row>
        </v-item-group>
        </v-container>
    </v-card>

</template>

<script>
 export default{
    data : ()=>({
        items: []
    }),
    mounted: async function(){
        const rep = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=ab7fa3f792c17d4471d45e57473b8d62&with_genres=28&page=10');
        this.items = await rep.json();

    }
 };
 

</script>
<script setup>
function getPoster(poster_path){
    return fetch('https://image.tmdb.org/t/p/original/',{poster_path})
 }
</script>
