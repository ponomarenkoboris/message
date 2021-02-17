<template>
  <article class="container" :id="id">
    <div class="info" ref="info">
      <div class="input-wrapper">
        <div class="left-side-color">
          <input type="color" ref="leftColor" class="leftColor" @input="changeColor"/>
          <p>Left side</p>
        </div>
        <div class="right-side-color">
          <input type="color" ref="rightColor" class="rightColor" @input="changeColor"/>
          <p>Right side</p>
        </div>
      </div>
      <div class="change-wrapper">
        <h3>Selected Color</h3>
        <div class="selected" ref="selected"></div>
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
    id: String
  },
  setup(props) {
    
    const theme = reactive({});
    const notDefaultColor = ref(false);
    const success = ref(false);
    const leftColor = ref(null);
    const rightColor = ref(null);
    const selected = ref(null);
    const store = useStore();

    const changeColor = () => {
      notDefaultColor.value = true;
      selected.value.style.background = "linear-gradient(to right, " + leftColor.value.value + ", " + rightColor.value.value + ")";
      theme.leftColor = leftColor.value.value;
      theme.rightColor = rightColor.value.value;
    }

    const submitColor = () => {
      if (props.id === 'main') store.commit('changeMainTheme', theme);
      if (props.id === 'message') store.commit('changeMessageTheme', theme);
      success.value = true;
      setTimeout(() => success.value = false, 1500);
    }

    return {
      selected,
      changeColor,
      submitColor,
      notDefaultColor,
      success,
      leftColor,
      rightColor
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