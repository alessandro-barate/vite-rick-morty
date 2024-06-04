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

    axios.get(this.store.apiUrl).then(response => {
        this.store.results = response.results;
});
    console.log(this.store.results);
    },
};
</script>
<template>
<MainComponent/>
</template>