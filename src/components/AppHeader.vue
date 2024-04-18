<template>
    <header class="page-header">
        <div class="container">
            <div class="row space-between">
                <div class="flex align-center">
                    <img class="logo" src="../../Netflix_logo.svg" alt="netflix logo" />
                    <nav class="flex">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Serie TV</a></li>
                        <li><a href="#">Film</a></li>
                        <li><a href="#">La mia lista</a></li>
                    </nav>
                </div>
                <div class="flex align-center">
                    <SearchBar />
                    <div class="user-info flex align-center">
                        <img class="avatar" src="../../Netflix_avatar.png" alt="user avatar" />
                        <p>Marina</p>
                        <font-awesome-icon :icon="['fas', 'caret-down']" />
                    </div>
                </div>
            </div>
        </div>
    </header>


</template>

<script>
import SearchBar from './SearchBar.vue'

export default {
    components: {
        SearchBar
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped lang="scss">
.page-header {
    background-color: black;
    color: white;
    padding: 20px 0;
}

.logo {
    width: 100px;
}

nav {
    margin: 0 30px;
    gap: 15px;
}

.avatar {
    width: 30px;
}

.user-info {
    font-size: 13px;
    gap: 10px;
}
</style>