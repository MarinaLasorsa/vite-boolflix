<template>
    <main class="page-content">
        <div class="container">
            <div>
                <h1>Movies</h1>
                <ul class="row">
                    <AppCard v-for="movie in store.movies" :key="movie.id" :media="movie" />
                </ul>
            </div>
            <div>
                <h1>TV Series</h1>
                <ul class="row">
                    <AppCard v-for="tvSerie in store.tvSeries" :key="tvSerie.id" :media="tvSerie" />
                </ul>
            </div>
        </div>
    </main>
</template>

<script>
import AppCard from './AppCard.vue';
import { store } from '../store.js';

export default {
    components: {
        AppCard
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style scoped lang="scss">
.page-content {
    color: lightgray;
    margin: 20px 0;
}
</style>