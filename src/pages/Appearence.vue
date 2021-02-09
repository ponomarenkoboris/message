<template>
  <section class="appearence" @click="fontSelector = false, mainPicker = false, messPicker = false">
    <article class="font-style-wrapper">
      <h3 class="font-style__title">Select font</h3>
      <div class="font-style__selector" @click="selectorHandler">
        <span class="font-style__placeholder">{{ fontName }}</span>
        <p>&times;</p>
      </div>
      <div class="font-style__dropdown" v-if="fontSelector">
        <ul class="fonts-list">
          <li v-for="font in fonts" :key="font.name" class="font-wrapper" @click="fontHandler(font.name)">
            <p class="font-name">{{ font.name }}</p>
            <p class="font-example" :style="{ fontFamily: font.name }">{{ font.example }}</p>
          </li>
        </ul>
      </div>
    </article>
    <article class="chat-background__wrapper">
      <div class="background-img__wrapper">
        <img :src="background_src" alt="Chat background" class="background-img">
      </div>
      <input type="file" id="file" hidden @change="uploadAndRenderImg">
      <button class="submitChatBackground" @click="choosePhoto">Choose chat background image</button>
    </article>
    <section class="pickers-wrapper">
      <article class="main-theme__warpper">
        <h3 class="theme__title" @click="mainThemeHandler">Choose main color theme</h3>
        <div class="theme__color-picker">
          <ColorPicker v-if="mainPicker" :id="1"/>
        </div>
      </article>
      <article class="chat-theme__warapper">
        <h3 class="theme__title" @click="messThemeHandler">Choose chat theme</h3>
        <div class="theme__color-picker">
          <ColorPicker v-if="messPicker" :id="2"/>
        </div>
      </article>
    </section>
  </section>
</template>

<script>
import ColorPicker from '@/components/ColorPicker.vue';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import clearImage from '../../public/img/systemImages/noimage.jpeg';
// TODO debug controllers
export default {
  name: 'Appearence',
  setup() {
    
    const background_src = ref(clearImage);
    const store = useStore();
    const fontName = computed(() => store.state.fonts.find(item => item.active).name);
    const fonts = computed(() => store.state.fonts);

    // controllers
    const fontSelector = ref(false);
    const mainPicker = ref(false);
    const messPicker = ref(false);

    // controllers func 
    const selectorHandler = () => setTimeout(() => fontSelector.value = !fontSelector.value, 0);
    const mainThemeHandler = () => setTimeout(() => mainPicker.value = !mainPicker.value, 0);
    const messThemeHandler = () => setTimeout(() => messPicker.value = !messPicker.value, 0);
    
    // select photo (click on button)
    function choosePhoto() {
      const accept = ['.png', '.jpg', '.jpeg'];
      const input = document.querySelector('#file');
      input.setAttribute('accept', accept.join(','));
      input.click();
    }

    // select photo (upload on servise)
    function uploadAndRenderImg(e) {
      if (!e.target.files.length) return;
      if(!e.target.files[0].type.match('image')) return;
      
      const reader = new FileReader();
      reader.onload = event => {
        background_src.value = event.target.result;
        // TODO must be uploaded to localStorage
      }
      reader.readAsDataURL(e.target.files[0]);
    }

    // change app font
    function fontHandler(name) {
      store.commit('changeFont', name);
    }
    

    return {
      choosePhoto,
      uploadAndRenderImg,
      background_src,
      fontSelector,
      fontName,
      fonts,
      fontHandler,
      selectorHandler,
      mainPicker,
      messPicker,
      mainThemeHandler,
      messThemeHandler,
    }
  },
  components: {
    ColorPicker
  }
}
</script>

<style lang="scss" scoped>
// TODO complite style 
.appearence {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > * {
    margin-top: 50px;
  }

  .font-style {
    &-wrapper{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 400px;
      position: relative;
    }

    &__title{
      margin-bottom: 30px;
    }

    &__selector {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 5px 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: .5px 1px 1px rgba($color: #000000, $alpha: .3);
    }
    &__dropdown {
      position: absolute;
      top: 82px;
      width: 100%;
      padding: 5px 10px;
      border: 1px solid #ccc;
      background: #fff;
      border-radius: 5px;
      box-shadow: .5px 1px 1px rgba($color: #000000, $alpha: .3);

      .fonts-list {
        list-style: none;
        padding: 0;

        .font-wrapper {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 5px;
          border-bottom: 1px solid #ccc;
          transition: .22s linear;

          &:hover {
            background: rgba($color: #ccc, $alpha: .2);
          }
          &:active {
            background: rgba($color: #ccc, $alpha: .1);
          }
          
        }
      }
    }
  }

  .chat-background__wrapper {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .submitChatBackground {
      margin-top: 20px;
      outline: none;
      cursor: pointer;
      padding: 5px 10px;
      border-radius: 20px;
      border: none;  

      &:hover {
        background: rgba($color: #000000, $alpha: .2);
      }
      &:active {
        background: rgba($color: #ccc, $alpha: .4);
      }
    }
  } 

  .pickers-wrapper{
    margin-top: 100px;
    display: flex;
    width: 700px;
    justify-content: space-between;
    
    .theme__title {
      cursor: pointer;
      margin-bottom: 20px;
      padding: 10px 10px;
      border-radius: 20px;
      transition: .22s linear;

      &:hover {
        background-color: rgba($color: #000000, $alpha: .2);
      }
      &:active {
        background: rgba($color: #ccc, $alpha: .4);
      }
    }
  }

}
</style>