<script>
import { store } from '../store.js';
export default {
    name: 'SearchComponent',

    data(){
    return {
        store,
    };
},
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