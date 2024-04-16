<script>

export default {
    props: {
        movie: Object
    },
    data() {
        return {

        }
    },
    computed: {
        flagImagePath() {
            return `../../${this.movie.original_language}.png`
        }
    }
}
</script>

<template>
    <div>
        <h1>{{ movie.title }}</h1>
        <h2>{{ movie.original_title }}</h2>
        <img class="language-flag" :src="flagImagePath" :alt="movie.original_language">
        <p>{{ movie.vote_average }}</p>
    </div>
</template>

<style scoped lang="scss">
.language-flag {
    width: 30px;
}
</style>