<template>
  <section class="chat-wrapper">
    <section class="chat__sidebar-wrapper">
      <div class="sidebar" :style="{ background: themeColor }">
        <div v-for="(chat, idx) of fetchedChats" :key="idx" class="chat__block">
          <h4 class="sidebar__title">{{ chat.name }}</h4>
          <p class="chat__last-message">{{ chat.company.name }}: {{ chat.company.catchPhrase }}</p>
        </div>
      </div>
    </section>
    <section class="open__chat-wrapper">
      <div ref="messList" class="messages-list">
        <div class="message-wrapper" v-for="(mess, idx) in messages" :key="idx">
          <Message :name="mess.name" :text="mess.text" :owner="mess.owner" :date="Date.now().toString()" />
        </div>
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
  name: 'Chat',
  async asyncData({ $axios }) {
    try {
      const fetchedChats = await $axios.$get('https://jsonplaceholder.typicode.com/users');
      return { fetchedChats }
    } catch (error) {
      console.error('Error 404: couldn`t get data about chats');
    }
  },
  computed: {
    pageHeight() {
      return document.documentElement.clientHeight + 'px';
    },
    messages() {
      return this.$store.getters['testMess/messages'];
    },
    themeColor() {
      const colorTheme = this.$store.getters['appearence/secondaryTheme'];
      const colorStyle = `linear-gradient(to right, ${colorTheme.leftColor}, ${colorTheme.rightColor}` + ')';
      return colorStyle;
    }
  },
  updated() {
    this.$refs.messList.scrollTop = this.$refs.messList.scrollHeight;
  },
  components: {
    MessageForm,
    Message
  }
}
</script>

<style lang="scss" scoped>
  .chat-wrapper {    

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
      max-height: 838px;

      .sidebar {
        overflow-y: scroll;
      }

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
      padding: 15px 30px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 730px;
      

      .messages-list {
        overflow-y: auto;
        height: 100%;
        padding-left: 10px;
        padding-right: 10px;
        .message-wrapper {
          margin-top: 15px;
          display: flex;
          justify-content: flex-end;
        }
      }
      
    }
  }
</style>