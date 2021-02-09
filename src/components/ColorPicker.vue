<template>
  <article class="container" :id="id">
    <div class="info">
      <div class="input-wrapper">
        <input type="color" class="color1" @input="changeColor"/>
        <input type="color" class="color2" @input="changeColor"/>
      </div>
      <h3>Selected Color</h3>
      <div class="selected"></div>
    </div>
    <div class="gradient-mixer"></div>
  </article>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'ColorPicker',
  props: {
    id: Number
  },
  setup(props) {
    
    const theme = reactive({});

    const changeColor = () => {
      const color1 = document.querySelector('.color1').value;
      const color2 = document.querySelector('.color2').value;
      const selected = document.querySelector('.selected');
      selected.style.background = "linear-gradient(to right, " + color1 + ", " + color2 + ")";
      theme.color1 = color1;
      theme.color2 = color2;
      if (props.id === 1) console.log('main theme');
      if (props.id === 2) console.log('messege theme');
    }

    return {
      changeColor
    }
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
  margin-bottom: 200px;

  #color-picker {
    border: 3px solid rgba(15, 15, 15, .2);
  }
  .info {
    width: 12em;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .input-wrapper {
      display: flex;
      justify-content: space-between;
      width: 100%;

    }
  }
  .selected {
    width: 250px;
    height: 100px;
    background: #000;
  }
}
</style>