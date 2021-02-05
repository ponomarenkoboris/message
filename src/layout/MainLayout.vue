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
            
                <Search />
            </div>
        </header>

        <transition name="error">
            <Error v-if="showError" :status="404" :message="'Here will be an arror message...'" @hideError="hideMessege"/>
        </transition>

        <router-view v-slot="component">
            <transition name="page" mode="out-in">
                <component :is="component.Component"></component>
            </transition>
        </router-view>
    </div>
</template>

<script>
import Search from '@/components/Search.vue';
import Error from '@/components/ErrorMessage.vue'

import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
// import { useAuth } from '@/use/auth';

export default {
    name: 'MainLayout',
    setup() {
        const showError = ref(false);

        function hideMessege() {
            showError.value = !showError.value
        }
        
        const router = useRouter();
        const store = useStore();
        const userName = computed(() => store.state.userTest.userName);

        // check autorization
        // onBeforeRouteUpdate(() => {
        //     const isAuth = useAuth(); 
        //     if (!isAuth) router.push('/login');
        // });

        const route = (link) => {  
            router.push({ path: `/msb/${link}` });
        }

        return {
            route,
            userName,
            hideMessege,
            showError,
        }
    },
    components: {
        Search,
        Error
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
            margin-left: 10px;
            margin-right: 10px;
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
// error transition
.error-enter-active,
.error-leave-active {
    opacity: 1;
    transition: .22s ease-in-out;
}
.error-enter-from,
.enter-leave-to {
    opacity: 0;
}
</style>