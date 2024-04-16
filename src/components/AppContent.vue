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
        content
        <AppCard />
    </div>
</template>

<style scoped lang="scss"></style>