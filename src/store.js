import {reactive} from 'vue';

export const store = reactive({
    apiResults: [],
    loading: true,
    info: {
        url: 'https://rickandmortyapi.com/api/',
        resultNumber: 20,
        offsetNumber: 0,
        endpoints: {
            characters: 'character',
        }
    }
});