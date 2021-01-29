<template>
    <div class="empty-layout" :style="{ height: screenHeigth + 'px' }">
        <router-view></router-view>
    </div>   
    
</template>
<script>
import { computed } from 'vue';
// import Login from '../pages/Login.vue';

// TODO complite routing
export default {
//   components: { Login },
    name: 'EmptyLayout',
    setup() {
        const screenHeigth = computed(() => window.screen.height);

        return {
            screenHeigth,
        }
    }
}
</script>

<style lang="scss">
* {
    // overflow: hidden;
}
.empty-layout {
    background-color: rgba($color: #000000, $alpha: .7);
}
</style>
