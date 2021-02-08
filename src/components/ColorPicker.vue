<template>
  <article class="container" :id="id">
    <canvas id="color-picker"></canvas>
    <div class="info">
        <h3>Selected Color</h3>
        <div class="selected"></div>
    </div>
  </article>
</template>

<script>
import { Picker } from '@/scripts/colorPicker.js';
import { onMounted } from 'vue';
// TODO fix drag and drop bug
export default {
  name: 'ColorPicker',
  props: {
    id: Number
  },
  setup() {
    onMounted(() => {
      const picker = new Picker(document.querySelector('#color-picker'), 250, 250);
      setInterval(() => picker.draw(), 1);
      picker.onChange((color) => {
        let selected = document.querySelector('.selected');
        selected.style.background = `rgb(${color.r}, ${color.g}, ${color.b})`;
      });
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  #color-picker {
    border: 3px solid rgba(15, 15, 15, .2);
  }
  .info {
    width: 12em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .selected {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 2px solid rgba(15, 15, 15, .2);
  }
}

</style>