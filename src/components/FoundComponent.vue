<script>
import { store } from '../store.js';
export default {
    name: 'FoundComponent',

    data(){
        return {
            store,
        };
    },
};
</script>

<template>
    <h2 class="found-characters">Found {{ store.info.count }} characters</h2>
</template>