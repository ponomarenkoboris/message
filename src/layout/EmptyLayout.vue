<template>
    <div class="empty-layout" :style="{ height: screenHeigth + 'px' }">
        <Login />
        <Registration />
    </div>    
</template>
<script>
import { computed } from 'vue';
import Login from '@/pages/Login.vue';
import Registration from '@/pages/Registration.vue';

export default {
    name: 'EmptyLayout',
    setup() {
        const screenHeigth = computed(() => window.screen.height);

        return {
            screenHeigth
        }
    },
    components: {
        Login,
        Registration
    }
}
</script>

<style lang="scss">
.empty-layout {
    background-color: rgba($color: #000000, $alpha: .7);
}
</style>
