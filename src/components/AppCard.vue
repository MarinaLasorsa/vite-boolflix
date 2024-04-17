<template>
    <li>
        <img :src="posterImageUrl" :alt="getMediaTitle" />
        <h2>{{ getMediaTitle }}</h2>
        <h3>{{ getMediaOriginalTitle }}</h3>
        <img class="language-flag" :src="flagImagePath" :alt="media.original_language">
        <div>
            <span><font-awesome-icon v-for="fullStar in fullStarVote" :key="fullStar" :icon="['fas', 'star']" /></span>
            <span><font-awesome-icon v-for="emptyStar in emptyStarVote" :key="emptyStar"
                    :icon="['far', 'star']" /></span>
        </div>
    </li>
</template>

<script>

export default {
    props: {
        media: {
            type: Object,
            required: true
        }
    },
    data() {
        return {

        }
    },
    computed: {
        getMediaTitle() {
            if (this.media.title) {
                return this.media.title
            }
            else {
                return this.media.name
            }
        },
        getMediaOriginalTitle() {
            if (this.media.original_title) {
                return this.media.original_title
            }
            else {
                return this.media.original_name
            }
        },
        flagImagePath() {
            return `../../${this.media.original_language}.png`
        },
        posterImageUrl() {
            return `https://image.tmdb.org/t/p/w342/${this.media.poster_path}`
        },
        fullStarVote() {
            return Math.floor(this.media.vote_average / 2)
        },
        emptyStarVote() {
            return 5 - this.fullStarVote
        }
    }
}
</script>

<style scoped lang="scss">
.language-flag {
    width: 30px;
}
</style>