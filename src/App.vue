<script>
import MainComponent from './components/MainComponent.vue';
import { store } from './store.js';
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

    axios.get(store.apiUrl).then(response => console.log('ciao'));
    },
};
</script>
<template>
<MainComponent/>
</template>