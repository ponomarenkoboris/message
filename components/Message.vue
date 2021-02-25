<template>
    <article class="message-wrapper">
        <div class="message">
            <small><strong>{{ name }}</strong></small>
            <p>{{ text }}</p>
        </div>
    </article>
</template>

<script>
export default {
    name: 'Message',
    props: {
        date: String,
        name: String,
        text: String,
        ownre: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
.message {
    left: 30px;
    border-radius: 20px;
    padding: 3px 5px;
    width: 300px;
    max-width: 500px;
    background: red;
}
</style>