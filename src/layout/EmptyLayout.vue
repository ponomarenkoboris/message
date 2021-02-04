<template>
    <div class="empty-layout" :style="{ height: screenHeigth + 'px' }">
        <router-view />
    </div>   
    
</template>
<script>
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

// TODO complite routing
export default {
    name: 'EmptyLayout',
    setup() {
        const screenHeigth = computed(() => window.screen.height);
        const router = useRouter();
        onMounted(() => {
            router.push({path: '/login'})
        });

        return {
            screenHeigth,
        }
    }
}
</script>

<style lang="scss">
.empty-layout {
    background-color: rgba($color: #000000, $alpha: .7);
}
</style>
