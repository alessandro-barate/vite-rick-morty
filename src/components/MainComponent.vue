<script>
import CardComponent from "../components/CardComponent.vue";
import FoundComponent from "../components/FoundComponent.vue";
import SearchComponent from "../components/SearchComponent.vue";
import axios from 'axios';
import { store } from '../store.js';
export default {
    name: 'MainComponent',
    components: {
        CardComponent,
        FoundComponent,
        SearchComponent,
    },

    data(){
        return {
            store,
        };
    },

    methods: {

        getCharacters(){
            this.store.loading = true;

            const params = {
                name: this.store.inputName,
                status: this.store.searchKey,
            };

            if (this.store.searchKey) {
                params;
            }
            
            // console.log(this.store.info);
            axios.get(this.store.endpoints.base + this.store.endpoints.character, {params}).then((response) => {
            //this.store.apiCharacters = response.data.results;
            console.log(this.store.apiCharacters);
        });
        this.store.loading = false;
        },

    },
};
</script>

<template>
    <main>
        <div class="container" v-cloak>
            <div class="row">
                <div class="col">
                    <h1 class="title">Rick and Morthy App</h1>
                    <SearchComponent @search="getCharacters"/>
                    <CardComponent/>
                    <FoundComponent/>
                </div>
            </div>
        </div>
    </main>
</template>