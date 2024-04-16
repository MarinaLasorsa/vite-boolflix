<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    data() {
        return {
            store
        }
    },
    methods: {
        newSearch() {
            if (this.store.inputValue !== '') {
                this.store.movies = [];
                let query = this.store.inputValue;
                let api_key = "0c24cf5877aef251dd00749da23bab27";

                axios.get(`https://api.themoviedb.org/3/search/movie`, {
                    params: {
                        api_key: api_key,
                        query: query
                    }
                }).then((res) => {
                    this.store.movies = res.data.results;
                    //console.log(this.store.movies)
                })
            }
            this.store.inputValue = ''
        }
    }
}
</script>

<template>
    <div>
        <input type="text" name="search" v-model.trim="store.inputValue" />
        <button @click="newSearch">Cerca</button>
    </div>
</template>

<style scoped lang="scss"></style>