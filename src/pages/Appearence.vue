<template>
  <section class="appearence">
    <article class="font-style-wrapper">
      <h3 class="font-style__title">Roboto</h3>
      <input type="text" class="font-style__selector" placeholder="Choose font">
    </article>
    <article class="main-theme__warpper">
      <h3 class="main-theme__title">Choose color theme</h3>
      <div class="main-theme__color-picker">
        <ColorPicker />
      </div>
    </article>
  </section>
</template>

<script>
import ColorPicker from '@/components/ColorPicker.vue';

export default {
  name: 'Appearence',
  setup() {

  },
  components: {
    ColorPicker
  }
}
</script>

<style lang="scss" scoped>
.appearence {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > * {
    margin-top: 50px;

    
  }

}
</style>