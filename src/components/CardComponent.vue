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
    console.log('chiamata api');

    axios.get(this.store.apiUrl).then((response) => {
        this.store.apiResults = response.data.results;
        console.log(this.store.apiResults);
    });
    
    },
};
</script>

<template>
    <div class="cards-container">
        <div v-for="character in store.apiResults" class="card">
            <img src="" alt="">
            <p>{{ character.name }}</p>
            <p>{{ character.status }}</p>
            <p>{{ character.species }}</p>
        </div>
    </div>
</template>