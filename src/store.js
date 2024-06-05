import {reactive} from 'vue';

export const store = reactive({
    apiResults: [],
    apiCharacters: [],
    loading: true,
    searchKey: '',
    info: {
        url: 'https://rickandmortyapi.com/api/',
        endpoints: {
            characters: 'character',
        }
    }
});