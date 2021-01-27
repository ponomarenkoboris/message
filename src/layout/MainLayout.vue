<template>
    <div class="main-layout">
        
        <header class="header-wrapper">
            <router-link to="/Chat"><h1 class="app-name">msbk</h1></router-link>
            <router-link to="/Profile"><h3>Profile</h3></router-link>
            <router-link to="/Credits"><h3>Credits</h3></router-link>
            <router-link to="/Settings"><h3>Settings</h3></router-link>
           
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
export default {
    name: 'MainLayout',
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