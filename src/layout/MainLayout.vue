<template>
    <div class="main-layout">
        <header class="header-wrapper">
            <h1 @click="route('chat')" class="app-name">msbk</h1>
            <h3 @click="route('profile')" class="header__link">Profile</h3>
            <h3 @click="route('credits')" class="header__link">Credits</h3>
            <h3 @click="route('settings')" class="header__link">Settings</h3>
           
            <div class="header-search-wrapper">
                <input class="search__input" type="text" placeholder="Search...">
                <button class="search__submit">
                    <img class="search-btn__img" src="../../public/img/systemImages/search.svg" alt="magnifying-glass">
                </button>
            </div>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    name: 'MainLayout',
    setup() {
        const router = useRouter();
        const route = (link) => {  
            console.log(link);
            router.push({ path: `/msb/${link}` });
        }

        return {
            route
        }
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

    .app-name, .header__link {
        cursor: pointer;
        padding: 30px;
        color: #ffffff;
        &:hover {
            border-radius: 20px;
            background-color: rgba($color: #fff, $alpha: .2);
        }
    }
    .app-name {
        padding: 27px;
    }
    .router-link{
        text-decoration: none;
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