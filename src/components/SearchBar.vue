<template>
    <div class="position-relative">
        <input class="search-bar" type="text" name="search" v-model.trim="inputValue" placeholder="cerca..."
            @keyup.enter="newSearch" />
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="search-icon" />
    </div>
</template>

<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    data() {
        return {
            store,
            inputValue: ""
        }
    },
    methods: {
        newSearch() {
            if (this.inputValue !== '') {
                this.store.movies = [];
                this.store.tvSeries = [];
                let query = this.inputValue;
                let api_key = "0c24cf5877aef251dd00749da23bab27";

                axios.get(`https://api.themoviedb.org/3/search/movie`, {
                    params: {
                        api_key: api_key,
                        query: query
                    }
                }).then((res) => {
                    this.store.movies = res.data.results;
                    //console.log(this.store.movies)
                });

                axios.get(`https://api.themoviedb.org/3/search/tv`, {
                    params: {
                        api_key: api_key,
                        query: query
                    }
                }).then((res) => {
                    this.store.tvSeries = res.data.results;
                    //console.log(this.store.tvSeries)
                })
            }
            this.store.inputValue = ''
        }
    }
}
</script>

<style scoped lang="scss">
.search-bar {
    height: 30px;
    border: none;
    background-color: black;
    cursor: pointer;
    color: white;
    padding-left: 50px;
    margin-right: 10px;
}

::placeholder {
    color: rgb(255, 255, 255);
    opacity: 1;
}

.search-icon {
    color: white;
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    pointer-events: none;
}
</style>