<template>
    <section class="chat-page">
        <section v-if="chats" class="sidebar-wrapper">
            <div v-for="chat in chats" :key="chat.id" class="chat-wrapper">
                <h4 class="chat__title">{{ chat.name }}</h4>
                <p class="chat__text">{{ chat.company.name }}: {{ chat.company.catchPhrase }}</p>
            </div>
        </section>
        <section class="opened-chat-wrapper">
            <MessageForm />
        </section>
    </section>
</template>

<script>
import MessageForm from '@/components/MessageForm.vue'
import { computed, onMounted, reactive } from 'vue';
export default {
    name: 'Chat',
    setup() {
        // ref returns a reactive and mutable ref object
        // reactive returns a reactive copy of the object
        const chats = reactive({});
        const windowHeight = computed(() => window.screen.height);
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
            chats
        }
    },
    components: {
        MessageForm
    }
}
</script>

<style lang="scss" scoped>
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
    max-height: 850px; // TODO make dynamic definition of heights
    overflow-y: scroll;

    .chat-wrapper {
        width: 300px;
        padding: 20px 30px;
        border-radius: 50px;

        &:hover {
            cursor: pointer;
            background-color: rgba($color: #000000, $alpha: .4);
        }
        .chat__title {
            padding-bottom: 10px;
            color: rgba($color: #ffffff, $alpha: 1);
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
}
</style>