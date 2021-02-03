<template>
    <div class="messageForm-wrapper">
        <input class="message-input" type="text" v-model="inputValue">
        <button class="sendMessage" @click="sendHandler">Send</button>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'MessageForm',
    setup() {
        const inputValue = ref('');
        const store = useStore();
        const name = computed(() => store.state.userTest.userName)

        function sendHandler() {
            if (!inputValue.value) return
            store.commit('addMessage', { name, text: inputValue.value });
            inputValue.value = '';
        }
        return {
            inputValue,
            sendHandler
        }
    }
}
</script>

<style lang="scss" scoped>
.messageForm-wrapper{
    padding: 15px 50px;
    background-color: rgba($color: #000000, $alpha: .8);

    .message-input {
        height: 30px;
        outline: 0;
        width: 95%;
        background-color: inherit;
        color: #ffffff;
        border: none;
        border-bottom: 1px solid #ffffff;        
        font-size: 1rem;
    }

    .sendMessage {
        margin-left: 13px;
        padding: 10px 10px;
        cursor: pointer;
        border: none;
        border-radius: 15px;
        background-color: rgba($color: #000000, $alpha: 0);
        color: #fff;
        transition: .22s ease-in-out;

        &:hover{
            background-color: rgba($color: #fff, $alpha: .1);
        }

        &:active {
            background-color: rgba($color: #000000, $alpha: 8); 
        }
    }
}
</style>