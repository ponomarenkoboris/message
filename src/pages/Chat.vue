<template>
    <section class="chat-page" v-cloak @click="showerror">
        <section v-if="chats" class="sidebar-wrapper">
            <div v-for="chat in chats" :key="chat.id" class="chat-wrapper">
                <h4 class="chat__title">{{ chat.name }} &#8195;<span class="new-messege-counter">{{ messageCount }}</span></h4>
                <p class="chat__text">{{ chat.company.name }}: {{ chat.company.catchPhrase }}</p>
            </div>
        </section>
        
        <section class="opened-chat-wrapper">
            <article class="messages">
                <Message v-for="mess in testMessages" :key="mess.text" :text="mess.text" :name="mess.name" :time="new Date().toLocaleTimeString()"/>
            </article>
            <MessageForm />
        </section>
    </section>
</template>

<script>
import MessageForm from '@/components/MessageForm.vue';
import Message from '@/components/Message.vue';
import { computed, onMounted, reactive, ref } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'Chat',
    setup() {
        const chats = reactive({});
        const windowHeight = computed(() => window.screen.height);
        const store = useStore();
        const testMessages = computed(() => store.state.messagesTest);

        //this value will be computed, then user get new message
        const messageCount = ref(1);
        

        onMounted(async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                let counter = 0;
                for (let chat of data) {
                    chats[counter] = {...chat};
                    counter++;
                }
                counter = 0;
            } catch (error) {
                console.log('!Error!: ', error.message);
            }
        });

        return {
            windowHeight,
            chats,
            testMessages,
            messageCount
        }
    },
    components: {
        MessageForm,
        Message
    }
}
</script>

<style lang="scss" scoped>
// TODO dinamic hieght and width
.chat-page {
    display: flex;
    flex-direction: row;
    max-height: inherit;
}
.sidebar-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 460px;
    background-color: rgba($color: #000000, $alpha: .7);
    box-sizing: border-box;
    height: 850px;
    overflow-y: scroll;
    overflow-x: hidden;

    .chat-wrapper {
        width: 300px;
        padding: 20px 30px;
        border-radius: 50px;

        &:hover {
            cursor: pointer;
            background-color: rgba($color: #000000, $alpha: .4);
        }
        .chat__title {
            display: flex;
            justify-content: space-between;
            padding-bottom: 10px;
            color: rgba($color: #ffffff, $alpha: 1);

            .new-messege-counter {
                min-width: 20px;
                padding: 1px 3px;
                text-align: center;
                color: #000;
                background-color: #fff;
                border-radius: 50px 50px;
            }
        }
        .chat__text {
            color: rgba($color: #ffffff, $alpha: .5);
        }

    }
}
.opened-chat-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;

    .messages{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
}

</style>