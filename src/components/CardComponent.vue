<script>
import { store } from '../store.js';
import axios from 'axios';
export default {
    name: 'CardComponent',

data(){
    return {
        store,
    }
},

methods: {
    searchCard(){
        this.store.loading = true;

        axios.get(this.store.endpoints.base + this.store.endpoints.character).then((response) => {
        this.store.apiResults = response.data.results;
        this.store.info = response.data.info;

        this.store.loading = false;

        //  console.log(response);
        //  console.log(this.store.apiResults);
        // console.log(this.store.info);
    });
    },
},

created(){
    this.searchCard()
        // console.log(this.store.info);
},
};
</script>

<template>
    <div class="cards-container">
        <div v-if="store.loading">Caricamento personaggi...</div>
        <div v-else class="flex">
            <div v-for="(character, id) in store.apiResults" :key="id" class="card">
                <img :src="character.image" :alt="character.name">
                <p class="style">{{ character.name }}</p>
                <p class="padding-b">{{ character.status }}</p>
                <p>{{ character.species }}</p>
            </div>
        </div>
    </div>
</template>