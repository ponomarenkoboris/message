<template>
  <article class="color-picker">
    <h1>{{ 'color picker here'.toUpperCase() }}</h1>
  </article>
</template>

<script>
//TODO add or write color-picker
import { reactive } from 'vue';
export default {
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