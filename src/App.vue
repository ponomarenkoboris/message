<template>
  <section id="message-app-main" :style="{ height: clientHieght + 'px' }">
    <MainLayout v-if="layout" />
    <EmptyLayout v-else />
  </section>
</template>

<script>
import MainLayout from '@/layout/MainLayout.vue';
import EmptyLayout from '@/layout/EmptyLayout.vue';
import { computed, ref } from 'vue';
export default {
  setup() {
    const layout = ref(true);
    const clientHieght = computed(() => window.screen.height)

    return {
      clientHieght,
      layout
    }
  },
  components: {
    MainLayout,
    EmptyLayout
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,900&display=swap');
// TODO make dynamic definition of heights
* {
  margin: 0;
  font-family: 'Lato', sans-serif;
  // overflow: hidden;
}
</style>
