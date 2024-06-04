<script>
import MainComponent from './components/MainComponent.vue';
import { store } from './store.js';
import axios from 'axios';
export default {
    name: 'RickMorthyApp',
    components: {
        MainComponent,
    },

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
    <div v-for="character in store.apiResults" >{{ character.name }}</div>
<MainComponent/>
</template>