<template>
    <section class="login-wrapper">
        <section class="card">
            <article class="nav">
                <p class="nav-text">Still not in msb?</p>
                <router-link to="/Registration"><h3>Registration</h3></router-link>
            </article>
            <article class="entry-form">
                <form class="login-form" name="loginForm">
                    <input type="text" class="email-form" :placeholder="email">
                    <input type="text" class="password-form" :placeholder="password">
                    <button class="submitBtn">Log In</button>
                </form>
            </article>
        </section>
    </section>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'Login',
    setup() {
        const email = ref('Enter your email...');
        const pass = ref('Enter your password...');

        return {
            email,
            pass
        }
    }
}
</script>

<style lang="scss" scoped>
// TODO complite style
.login-wrapper {
    padding: 10%;
}
.card {
    padding: 40px 10px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    border: 1px solid #fff;
    max-width: 500px;

    .login-form {
        display: flex;
        flex-direction: column;

        .email-form, .password-form, .submitBtn {
            margin-top: 60px;
        }
    }
}

</style>