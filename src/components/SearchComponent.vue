<script>
import { store } from '../store.js';
import axios from 'axios';
export default {
    name: 'SearchComponent',

data(){
    return {
        store,
    };
},

methods: {
    getCharacters(){
        axios.get(this.store.info.url + this.store.info.endpoints.characters).then((response) => {
        this.store.apiResults = response.data.results;
        console.log(this.store.apiResults);
    });
    },
},

search(){
    console.log('selezione status');
},

created(){
    this.getCharacters();
}
};
</script>

<template>
    <div class="search-bar">
        <input type="text" placeholder="Search character" class="margin-lr padding border-radius">
        <select name="character-status" id="character-status" class="margin-lr border-radius" @change="$emit('search')" v-model="store.searchKey">
            <option selected value="">Select Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
        </select>
        <button class="margin-lr padding border-radius bg-blue">Search</button>
        <button class="margin-lr padding border-radius bg-gold">Reset</button>
    </div>
</template>