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

<template>
    <div>
        <ul>
            <li v-for="movie in store.movies">
                <AppCard :movie="movie" />
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss"></style>