<script>
import MainComponent from './components/MainComponent.vue';
import { store } from './store.js';
export default {
    name: 'RickMorthyApp',
    components: {
        MainComponent,
    },
    created(){
        console.log('chiamata api');

        axios.get()
    }
};
</script>
<template>
<MainComponent/>
</template>