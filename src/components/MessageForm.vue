<template>
    <div class="messageForm-wrapper">
        <div class="inputForm">
            <input class="message-input" type="text" v-model="inputValue">
            <button class="voiceMessage" id="voice" @click="recordVoice">Voice</button>
        </div>
        <button class="sendMessage" @click="sendHandler">Send</button>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { voiceMessage } from '@/scripts/voice';
import { isValid } from '@/scripts/validation';

export default {
    name: 'MessageForm',
    setup() {
        
        const inputValue = ref('');
        const store = useStore();
        const name = computed(() => store.state.userTest.userName)

        function sendHandler() {
            if (!isValid('message', inputValue.value)) return inputValue.value = '';
            store.commit('addMessage', { name, text: inputValue.value });
            inputValue.value = '';
        }

        const recordVoice = () => {
            // voice recording
            voiceMessage()
        }

        return {
            inputValue,
            sendHandler,
            recordVoice
        }
    }
}
</script>

<style lang="scss" scoped>
.messageForm-wrapper{
    display: flex;
    justify-content: space-around;
    padding: 15px 50px;
    background-color: rgba($color: #000000, $alpha: .8);

    .inputForm {
        width: 95%;
        padding: 2px 3px;
        border: 1px solid rgba($color: #000000, $alpha: 0);
        border-bottom: 1px solid #fff;
        border-radius: 20px;
        transition: .22s ease-in-out;
        
    
        .message-input {
            height: 30px;
            outline: 0;
            width: 94%;
            padding: 0 10px;
            background-color: rgba($color: #000000, $alpha: 0);
            color: #ffffff;
            border: none;
            font-size: 1rem;
        }

        .voiceMessage {
            padding: 3px 5px;
            color: #fff;
            cursor: pointer;
            outline: none;
            background-color: inherit;
            border: none;
            border-radius: 20px;

            &:active {
                background-color: rgba($color: #fff, $alpha: .3)
            }
        }
    }
    

    .sendMessage {
        outline: none;
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