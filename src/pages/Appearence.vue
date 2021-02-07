// TODO coplite style and ColorPicker
<template>
  <section class="appearence">
    <article class="font-style-wrapper">
      <h3 class="font-style__title">Select font</h3>
      <div class="font-style__selector" @click="isOpen = !isOpen">
        <span class="font-style__placeholder">Roboto</span>
        <p>&times;</p>
      </div>
      <div class="font-style__dropdown" v-if="isOpen">
        <ul class="fonts-list">
          <li v-for="font in fonts" :key="font.name" class="font-wrapper">
            <p class="font-name">{{ font.name }}</p>
            <p class="font-example">{{ font.example }}</p>
          </li>
        </ul>
      </div>
    </article>
    <article class="chat-background__wrapper">
      <div class="background-img__wrapper">
        <img :src="profile_src || ''" alt="Chat background" class="background-img" @change="uploadAndRenderImg">
      </div>
      <input type="file" id="file">
      <button class="submitChatBackground" @click="choosePhoto">Submit</button>
    </article>
    <section class="pickers-wrapper">
      <article class="main-theme__warpper">
        <h3 class="theme__title">Choose color theme</h3>
        <div class="theme__color-picker">
          <ColorPicker />
        </div>
      </article>
      <article class="chat-theme__warapper">
        <h3 class="theme__title">Choose chat theme</h3>
        <div class="theme__color-picker">
          <ColorPicker />
        </div>
      </article>
    </section>
  </section>
</template>

<script>
import ColorPicker from '@/components/ColorPicker.vue';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'Appearence',
  setup() {
    const isOpen = ref(false);
    const profile_src = ref('');
    const store = useStore();
    const fonts = computed(() => store.state.fonts);

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
      if (!e.target.files[0].type.match('image')) return;
      const reader = new FileReader();
      reader.onload = event => {
        profile_src.value = event.target.result;
        // TODO must be uploaded to localStorage
      }
      reader.readAsDataURL(e.target.files[0]);
    }
    
    return {
      choosePhoto,
      uploadAndRenderImg,
      profile_src,
      isOpen,
      fonts
    }
  },
  components: {
    ColorPicker
  }
}
</script>

<style lang="scss" scoped>
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
        }
      }
    }
  }

  .chat-background__wrapper {
    margin-top: 100px;
  } 

  .pickers-wrapper{
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    width: 50%;
  }

}
</style>