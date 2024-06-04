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

created(){
    axios.get(this.store.apiUrl).then((response) => {
        this.store.apiResults = response.data.results;
        console.log(response);
        console.log(this.store.apiResults);
    });
    
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