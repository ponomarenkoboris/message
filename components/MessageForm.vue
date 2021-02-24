<template>
  <section class="message__form-wrapper">
        <div class="input__form">
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
    methods: {
        submitMessage() {
            // this.$store.dispatch('logout');
            this.messageText = '';
        }
    }
}
</script>

<style lang="scss" scoped>
.message__form-wrapper {
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