<template>
    <div class="messageForm-wrapper">
        <input class="message-input" type="text">
    </div>
</template>

<script>
export default {
    name: 'MessageForm'
}
</script>

<style lang="scss" scoped>
.messageForm-wrapper{
    padding: 15px 50px;
    background-color: rgba($color: #000000, $alpha: .8);

    .message-input {
        height: 30px;
        outline: 0;
        width: 100%;
        background-color: inherit;
        color: #ffffff;
        border: none;
        border-bottom: 1px solid #ffffff;        
        font-size: 1rem;
    }
}
</style>