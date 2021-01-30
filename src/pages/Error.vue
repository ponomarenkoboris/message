<template>
    <section id="error">
        <section class="erMessage">
            <h4 class="message">Error: 404</h4>
        </section>
    </section>
</template>

<script>
export default {
    name: 'Error'
}
</script>

<style lang="scss" scoped>
    #error {
        padding: 40px 10px;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
        border: 1px solid #fff;
        max-width: 500px;
    }
</style>