<template>
  <article class="container" :id="id">
    <div class="info">
      <div class="input-wrapper">
        <div class="left-side-color">
          <input type="color" :id="firstColor" class="leftColor" @input="changeColor"/>
          <p>Left side</p>
        </div>
        <div class="right-side-color">
          <input type="color" :id="secondColor" class="rightColor" @input="changeColor"/>
          <p>Right side</p>
        </div>
      </div>
      <div class="change-wrapper">
        <h3>Selected Color</h3>
        <div :id="selectedArea" class="selected"></div>
        <button v-if="notDefaultColor" class="btn-submit-color" @click="submitColor">Pick color</button>
        <p v-if="success" class="success">Picked!</p>
      </div>
    </div>
  </article>
</template>

<script>
import { reactive, ref } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'ColorPicker',
  props: {
    id: String,
    firstColor: String,
    secondColor: String,
    selectedArea: String
  },
  setup(props) {
    
    const theme = reactive({});
    const notDefaultColor = ref(false);
    const success = ref(false);
    const store = useStore();

    const changeColor = () => {
      const leftColor = document.querySelector(`#${props.firstColor}`).value;
      const rightColor = document.querySelector(`#${props.secondColor}`).value;
      notDefaultColor.value = true;
      const selected = document.querySelector(`#${props.selectedArea}`);
      selected.style.background = "linear-gradient(to right, " + leftColor + ", " + rightColor + ")";
      theme.leftColor = leftColor;
      theme.rightColor = rightColor;
    }

    const submitColor = () => {
      if (props.id === 'main') store.commit('changeMainTheme', theme);
      if (props.id === 'message') store.commit('changeMessageTheme', theme);
      success.value = true;
      setTimeout(() => success.value = false, 1500);
    }

    return {
      changeColor,
      submitColor,
      notDefaultColor,
      success
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

  .info {
    width: 12em;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .input-wrapper {
      display: flex;
      justify-content: space-between;
      width: 100%;

      .left-side-color, .right-side-color{
        display: flex;
        flex-direction: column;
        align-items: center;

        .leftColor, .rightColor {
          cursor: pointer;
          border: none;
          padding: 0;
          width: 75px;
          height: 50px;
        }

        & > p {
          cursor: default;
          font-size: .9rem;
        }
      }

    }
  }
  .change-wrapper {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > h3, .selected {
      margin-top: 10px;
    }

    .selected {
      width: 250px;
      height: 100px;
      background: #000;
    }

    .btn-submit-color {
      cursor: pointer;
      margin-top: 30px;
      padding: 10px 15px;
      outline: none;
      border: none;
      border-radius: 20px;

      &:hover {
        background: rgba($color: #000000, $alpha: .2);
      }
      &:active {
        background: rgba($color: #ccc, $alpha: .4);
      }
    }
    .success {
      margin-top: 10px;
      font-size: .9rem;
      padding: 1.5px 6px;
      color: #fff;
      background: rgba($color: #000000, $alpha: .6);
      border-radius: 5px;
    }

  }
  
}
</style>