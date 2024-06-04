<script>
import CardComponent from "../components/CardComponent.vue";
import FoundComponent from "../components/FoundComponent.vue";
export default {
    name: 'MainComponent',
    components: {
        CardComponent,
        FoundComponent,
    },
};
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="title">Rick and Morthy App</h1>
                    <div class="search-bar">
                        <input type="text" placeholder="Search character" class="margin-lr padding border-radius">
                        <select name="character-status" id="character-status" class="margin-lr border-radius">
                            <option value="default"> Select Status</option>
                            <option value="alive">Alive</option>
                            <option value="dead">Dead</option>
                            <option value="unknown">Unknown</option>
                        </select>
                        <button class="margin-lr padding border-radius bg-blue">Search</button>
                        <button class="margin-lr padding border-radius bg-gold">Reset</button>
                    </div>
                    <CardComponent/>
                </div>
            </div>
        </div>
    </main>
</template>