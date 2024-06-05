<script>
import CardComponent from "../components/CardComponent.vue";
import FoundComponent from "../components/FoundComponent.vue";
import SearchComponent from "../components/SearchComponent.vue";
export default {
    name: 'MainComponent',
    components: {
        CardComponent,
        FoundComponent,
        SearchComponent,
    },

methods: {
    ciao(){
        console.log('ciao');
    }
}
};
</script>

<template>
    <main>
        <div class="container" v-cloak>
            <div class="row">
                <div class="col">
                    <h1 class="title">Rick and Morthy App</h1>
                    <SearchComponent @search="ciao"/>
                    <CardComponent/>
                    <FoundComponent/>
                </div>
            </div>
        </div>
    </main>
</template>