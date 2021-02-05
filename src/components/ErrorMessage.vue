<template>
    <section id="error">
        <h3 class="cross" @click="$emit('hideError')">&times;</h3>
        <section class="erMessage">
            <h4 class="message"><span class="error__title">Error</span>: {{ status }}</h4>
            <p class="error__message">{{ message }}</p>
        </section>
    </section>
</template>

<script>

export default {
    name: 'Error',
    props: {
        status: Number,
        message: String
    },
    emits: ['hideError'],
}
</script>

<style lang="scss" scoped>
    #error {
        position: absolute;
        top: 15%;
        right: 6%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 10px 20px;
        background-color: rgba($color: #000000, $alpha: .8);
        color: #fff;
        max-height: 150px;
        width: 218px;
        transition: .22s ease-in;

        .error__title {
            text-transform: uppercase;
            color: #bd1616;
        }

        .cross {
            cursor: pointer;
        }
    }
</style>