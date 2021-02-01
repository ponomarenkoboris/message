<template>
  <section id="message-app-main">
    <router-view></router-view>
  </section>
</template>

<script>
import { computed } from 'vue';
export default {
  setup() {
    const clientHieght = computed(() => window.screen.height)

    return {
      clientHieght,
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,900&display=swap');

* {
  margin: 0;
  font-family: 'Lato', sans-serif;
}
</style>
