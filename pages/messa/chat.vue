<template>
  <section class="chat-wrapper">
    <section class="chat__sidebar-wrapper">
      <div class="sidebar">
        <div v-for="(chat, idx) of fetchedChats" :key="idx" class="chat__block">
          <h4 class="sidebar__title">{{ chat.name }}</h4>
          <p class="chat__last-message">{{ chat.company.name }}: {{ chat.company.catchPhrase }}</p>
        </div>
      </div>
    </section>
    <section class="open__chat-wrapper">
      <div class="message-wrapper">
        <div class="">message Component</div>
      </div>
      <div class="message__form-wrapper">
        <MessageForm />
      </div>
    </section>
  </section>
</template>

<script>
import MessageForm from '~/components/MessageForm'
export default {
  async asyncData({ $axios }) {
    try {
      const fetchedChats = await $axios.$get('https://jsonplaceholder.typicode.com/users');
      return { fetchedChats }
    } catch (error) {
      console.log('Error 404: couldn`t get data about chats');
    }
  },
  computed: {
    pageHeight() {
      return document.documentElement.clientHeight + 'px';
    }
  },
  components: {
    MessageForm
  }
}
</script>

<style lang="scss" scoped>
  .chat-wrapper {
    display: flex;
    
    .chat__sidebar-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      width: 360px;
      background-color: rgba($color: #000000, $alpha: .7);
      box-sizing: border-box;
      overflow-y: scroll;

      .chat__block {
        padding: 20px 30px;
        border-radius: 50px;
        color: #fff;
        transition: .22s ease-out;

        &:hover {
          cursor: pointer;
          background-color: rgba($color: #000000, $alpha: .4);
        }
      }
    }
    .open__chat-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
  }
</style>