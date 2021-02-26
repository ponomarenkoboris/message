<template>
  <main class="default__layout-wrapper" :style="{ fontFamily: font }">
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
  },
  // middleware: ['auth'],
}
</script>
TODO complite debug style 
<style lang="scss" scoped>
* {overflow: hidden}
  // .default__layout-wrapper {
  //   overflow: hidden;
  // }
</style>
