<template>
    <section class="message__form-wrapper" :style="{ background: theme }">
        <div ref="inputForm" class="input__form">
            <input class="message__input" type="text" v-model="messageText">
            <button class="voice__input" id="voice">Voice</button>
        </div>
        <button class="sumbit__message" @click="submitMessage">Send</button>
    </section>
</template>

<script>
export default {
    data: () => ({
        messageText: ''
    }),
    computed: {
        theme() {
            const colorTheme = this.$store.getters['appearence/secondaryTheme'];
            const colorStyle = `linear-gradient(to right, ${colorTheme.leftColor}, ${colorTheme.rightColor}` + ')';
            return colorStyle;
        }
    },
    methods: {
        submitMessage() {
            if (this.messageText.trim()) {
                this.$store.commit('testMess/addMessage', {name: 'bor', text: this.messageText });
                this.messageText = '';
            } else {
                this.$refs.inputForm.style.border = '1px solid red';
                setTimeout(() => {
                    this.$refs.inputForm.style.border = '1px solid rgba(0, 0, 0, 0)';
                    this.$refs.inputForm.style.borderBottom = '1px solid #fff';
                }, 300);
                return this.messageText = '';
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.message__form-wrapper {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 360px;
    display: flex;
    justify-content: space-around;
    padding: 15px 50px;
    background-color: rgba($color: #000000, $alpha: .8);

    .input__form {
        width: 95%;
        padding: 2px 3px;
        border: 1px solid rgba($color: #000000, $alpha: 0);
        border-bottom: 1px solid #fff;
        border-radius: 20px;
        transition: .22s ease-in-out;

        &:focus-within {
            border: 1px solid #fff;
        }

        .message__input {
            height: 30px;
            outline: 0;
            width: 94%;
            padding: 0 10px;
            background-color: rgba($color: #000000, $alpha: 0);
            color: #ffffff;
            border: none;
            font-size: 1rem;
        }

        .voice__input {
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

    .sumbit__message {
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