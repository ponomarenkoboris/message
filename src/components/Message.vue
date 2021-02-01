<template>
  <article class="message__wrapper">
    <div class="message-header">
      <b class="message__time">Time: {{ time }}</b>
      <strong><h4 class="message__title">{{ name }}</h4></strong>
    </div>
    <p class="message__text">{{ text }}</p>
  </article>
</template>

<script>
export default {
  name: 'Message',
  props: {
    name: String,
    text: String,
    time: String
  }
}
</script>

<style lang="scss" scoped>
.message__wrapper {
  min-width: 300px;
  background-color: rgba($color: #053038fa, $alpha: 1.0);
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
