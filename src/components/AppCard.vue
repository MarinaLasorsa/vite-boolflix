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
            return `https://image.tmdb.org/t/p/w342${this.media.poster_path}`
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


<template>
    <li class="card">
        <img :src="posterImageUrl" :alt="getMediaTitle" />
        <div class="media-info card-hover">
            <p><strong>Titolo: </strong>{{ getMediaTitle }}</p>
            <p><strong>Titolo originale: </strong>{{ getMediaOriginalTitle }}</p>
            <!--<strong>Lingua originale: </strong><img class="language-flag" :src="flagImagePath"
                :alt="media.original_language">-->
            <p>
                <strong>Voto: </strong>
                <span class="vote"><font-awesome-icon v-for="fullStar in fullStarVote" :key="fullStar"
                        :icon="['fas', 'star']" /></span>
                <span><font-awesome-icon v-for="emptyStar in emptyStarVote" :key="emptyStar"
                        :icon="['far', 'star']" /></span>
            </p>
            <p><strong>Overview: </strong> {{ media.overview }}</p>
        </div>
    </li>
</template>


<style scoped lang="scss">
.card {
    position: relative;
    margin: 7px;
}

.media-info {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.89);
    color: white;
    padding: 10px;
    opacity: 0;
}

.media-info p {
    margin: 5px 0;
}

.card:hover .card-hover {
    opacity: 1
}

.language-flag {
    width: 30px;
    display: inline-block;
}

.vote {
    color: yellow
}
</style>