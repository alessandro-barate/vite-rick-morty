import {reactive} from 'vue';

export const store = reactive({
    apiResults: [],
    apiCharacters: [],
    loading: true,
    searchKey: '',
    inputName: '',
    info: {},
    endpoints: {
        base: 'https://rickandmortyapi.com/api/',
        character: 'character/'
    }
});