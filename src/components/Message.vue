<template>
  <article class="message__wrapper" :style="{ background: `linear-gradient(to right, ${colorConfig.leftColor}, ${colorConfig.rightColor}` + ')' }">
    <div class="message-header">
      <b class="message__time">Time: {{ time }}</b>
      <strong><h4 class="message__title">{{ name }}</h4></strong>
    </div>
    <p class="message__text">{{ text }}</p>
  </article>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'Message',
  props: {
    name: String,
    text: String,
    time: String
  },
  setup() {

    const store = useStore();
    const colorConfig = computed(() => store.state.appearance.themes.messege);

    return {
      colorConfig
    }
  }
}
</script>

<style lang="scss" scoped>
.message__wrapper {
  min-width: 300px;
  color: #fff;
  margin-right: 30px;
  margin-bottom: 30px;
  padding: 10px 15px;
  border-radius: 50px;

  .message-header {
    display: flex;
    justify-content: space-between;
  }
}
</style>
