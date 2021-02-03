<template>
    <div class="main-layout">
        <header class="header-wrapper">
            <div class="user-name-wrapper">
                <h1 class="user-name">{{ userName }}</h1>
            </div>
            <div class="header-nav-wrapper">
                <h1 @click="route('chat')" class="app_name" name="Chat">msbk</h1>
                <h3 @click="route('profile')" class="header__link">Profile</h3>
                <h3 @click="route('appearence')" class="header__link">Appearence</h3>
                <h3 @click="route('settings')" class="header__link">Settings</h3>
            
                <div class="header-search-wrapper">
                    <input class="search__input" type="text" placeholder="Search...">
                    <button class="search__submit">
                        <img class="search-btn__img" src="../../public/img/systemImages/search.svg" alt="magnifying-glass">
                    </button>

                </div>
            </div>
        </header>

        <router-view v-slot="component">
            <transition name="page" mode="out-in">
                <component :is="component.Component"></component>
            </transition>
        </router-view>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
    name: 'MainLayout',
    setup() {
        const router = useRouter();
        const store = useStore();

        const userName = computed(() => store.state.userTest.userName);

        const route = (link) => {  
            router.push({ path: `/msb/${link}` });
        }

        return {
            route,
            userName
        }
    }
}
</script>

<style lang="scss">
.header-wrapper {
    display: flex;
    margin: 0;
    justify-content: space-between;
    align-items: center;
    padding-right: 200px;
    background-color: rgba($color: #000000, $alpha: .8);

    .user-name-wrapper {
        margin-left: 100px;
        color: #fff;
        cursor: default;
    }

    .header-nav-wrapper {
        display: flex;
        align-items: center;
        .app_name, .header__link {
            cursor: pointer;
            padding: 30px;
            color: #ffffff;
            border-radius: 20px;
            transition: background-color .22s;

            &:hover {
                background-color: rgba($color: #fff, $alpha: .2);
            }
            &:active {
                background-color: rgba($color: #000000, $alpha: 8);
            }
        }
        .app_name {
            padding: 27px;
        }
        .header-search-wrapper {
            .search__input {
                border: none;
                padding: 5px 10px;
                max-width: 100px;
                border-radius: 50px;
            }
            .search__submit {
                cursor: pointer;
                background-color: #fff;
                border: none;
                position: relative;
                top: 2.5px;
                left: -34px;

                .search-btn__img {
                    height: 15px;
                }
            }
        }

    }
}
// transitions
.page-enter-from, .page-leave-to {
    opacity: 0;
}
.page-enter-active, .page-leave-active {
    transition: all .3s ease;
}
.page-enter-to, .page-leave {
    opacity: 1;
}
</style>