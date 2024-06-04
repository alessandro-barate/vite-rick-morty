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
        axios.get(this.store.info.url + this.store.info.endpoints.characters).then((response) => {
        this.store.apiResults = response.data.results;
        this.store.info = response.data.info;
        console.log(response);
        console.log(this.store.apiResults);
        console.log(this.store.info);
    });
    }
},

created(){
    this.searchCard();
    
    },
};
</script>

<template>
    <div class="cards-container">
        <div v-for="(character, id) in store.apiResults" :key="id" class="card">
            <img :src="character.image" :alt="character.name">
            <p class="style">{{ character.name }}</p>
            <p>{{ character.status }}</p>
            <p>{{ character.species }}</p>
        </div>
    </div>
</template>