<template>
    <div class="main-layout">
        <header class="header-wrapper">
            <h1 class="app-name">msbk</h1>
            <h3>Profile</h3>
            <h3>Credits</h3>
            <h3>Settings</h3>
            <div class="header-search-wrapper">
                <input class="search__input" type="text" placeholder="Search...">
                <button class="search__submit">
                    <img class="search-btn__img" src="../../public/img/systemImages/search.svg" alt="magnifying-glass">
                </button>
            </div>
        </header>
        <Chat />
        
    </div>
</template>

<script>
import Chat from '@/pages/Chat.vue'
export default {
    name: 'MainLayout',
    components: {
        Chat
    }
}
</script>

<style lang="scss">
.header-wrapper {
    display: flex;
    margin: 0;
    justify-content: flex-end;
    align-items: center;
    padding-right: 200px;
    background-color: rgba($color: #000000, $alpha: .8);

    .app-name, h3 {
        cursor: pointer;
        padding: 30px;
        color: #ffffff;
    }

    .header-search-wrapper {
        background-color: #ffffff;
        border: 1px solid #000000;
        border-radius: 50px;

        .search__input {
            outline: none;
            padding: 5px 10px;
            max-width: 100px;
            border: none;
            border-radius: 50px 0 0 50px;
        }

        .search__submit{
            cursor: pointer;
            position: relative;
            left: -10px;
            top: 2px;
            border: none;
            background-color: inherit;

            .search-btn__img {
                height: 15px;
            }
        }
    }
}
</style>