<template>
  <article class="color-picker">
    <h1>{{ 'color picker here'.toUpperCase() }}</h1>
    <!-- <chrome-picker v-model="color"/> -->
  </article>
</template>

<script>
//TODO add or write color-picker
// import { Chrome } from 'vue-color';
import { reactive } from 'vue';
export default {
  // components: { 'chrome-picker': Chrome },
  name: 'ColorPicker',
  setup() {
    const color = reactive({
      hex: '#194d33',
    });
    return {
      color
    }
  }
};
</script>

<style>

</style>