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
      <div class="message-wrapper" v-for="(mess, idx) in messages" :key="idx">
        <Message :name="mess.name" :text="mess.text" :owner="false" :date="Date.now().toString()" />
      </div>
      <div class="message__form-wrapper">
        <MessageForm />
      </div>
    </section>
  </section>
</template>

<script>
import MessageForm from '~/components/MessageForm';
import Message from '~/components/Message';

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
    },
    messages() {
      return this.$store.getters['testMess/messages'];
    }
  },
  components: {
    MessageForm,
    Message
  }
}
</script>

<style lang="scss" scoped>
  .chat-wrapper {
    // display: flex;
    
    .chat__sidebar-wrapper {
      position: relative;
      z-index: 1;
      left: 0;
      bottom: 0;
      top: 0;
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
      position: absolute;
      left: 360px;
      top: 99px;
      right: 0px;
      bottom: 66px;
      width: 500px;
      padding: 15px 30px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      overflow-y: scroll;

      .message-wrapper {
        margin-top: 15px;
        width: 100%;
      }
    }
  }
</style>