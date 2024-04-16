<script>

export default {
    props: {
        movie: Object
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <div>
        <h1>{{ movie.title }}</h1>
        <h2>{{ movie.original_title }}</h2>
        <h4>{{ movie.original_language }}</h4>
        <p>{{ movie.vote_average }}</p>
    </div>
</template>

<style scoped lang="scss"></style>