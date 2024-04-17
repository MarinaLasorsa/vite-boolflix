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
        flagImagePath() {
            return `../../${this.media.original_language}.png`
        },
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
        }
    }
}
</script>

<template>
    <li>
        <h2>{{ getMediaTitle }}</h2>
        <h3>{{ getMediaOriginalTitle }}</h3>
        <img class="language-flag" :src="flagImagePath" :alt="media.original_language">
        <p>{{ media.vote_average }}</p>
    </li>
</template>

<style scoped lang="scss">
.language-flag {
    width: 30px;
}
</style>