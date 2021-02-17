<template>
  <section id="message-app-main" :style="{ fontFamily: fontStyleObj.name }">
    <router-view></router-view>
  </section>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const fontStyleObj = computed(() => store.state.appearance.fonts.find(item => item.active));

    return {
      fontStyleObj
    }
  }
}
</script>

<style lang="scss">
// Lato Font
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,900&display=swap');

// Roboto Font
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

// Note Sans JP Font
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap');

// Nammersmith One Font
@import url('https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap');

// Raleway Font
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700&display=swap');

* {
  margin: 0;
}
</style>
