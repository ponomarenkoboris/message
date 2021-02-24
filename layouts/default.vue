<template>
  <main class="default__layout-wrapper" :style="{ fontFamily: font, height: pageHeigth }">
    <NavBar />
    <Nuxt />
  </main>
</template>
<script>
import NavBar from '~/components/NavBar';
export default {
  components: {
    NavBar
  },
  computed: {
    font() {
      return this.$store.getters['appearence/font'].name
    },
    pageHeigth() {
      return document.documentElement.clientHeight + 'px'
    }
  },
  // middleware: ['auth'],
}
</script>
<style lang="scss">
  .default__layout-wrapper {
    // overflow: hidden;
  }
</style>
