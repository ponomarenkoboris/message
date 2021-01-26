<template>
  <div>
    <div>
      <p class="text-xs-center">{{ text }}</p>
      <hr>
    </div>
    <div class="wrap">
      <div class="message">
        <small><strong>{{ name }}</strong></small>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: "Message",
  setup() {
    const name = ref('msbk');
    const text = ref('hellow nsdk');

    return {
      name, text
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
