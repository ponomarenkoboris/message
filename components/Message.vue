<template>
    <article class="message-container">
        <div ref="message" class="message" :style="{ background: theme }">
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
        owner: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
        if (this.$props.owner) {
            this.$refs.message.style = 'end' 
        }
    },
    computed: {
        theme() {
            const colorTheme = this.$store.getters['appearence/secondaryTheme']; 
            const colorStyle = `linear-gradient(to right, ${colorTheme.leftColor}, ${colorTheme.rightColor}` + ')'
            return colorStyle;
        }
    }
}
</script>

<style lang="scss" scoped>
.message-container {
    width: 300px;
    max-width: 500px;
}
.message {
    border-radius: 20px;
    padding: 3px 5px;
    background: red;
    color: #fff;
}
</style>