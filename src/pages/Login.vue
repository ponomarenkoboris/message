<template>
    <section class="login-wrapper">
        <section class="card">
            <article class="nav">
                <p class="nav-text">Still not in msb?</p>
                <h3 class="link-to-registration" @click="$router.push('/registration')">Registration</h3>
            </article>
            <article class="entry-form">
                <form class="login-form" name="loginForm">
                    <input type="text" class="email-form" placeholder="Enter your email..." v-model="userData.email">
                    <input type="text" class="password-form" placeholder="Enter your password..." v-model="userData.pass">
                    <button class="submitBtn" @click.prevent="login">Log In</button>
                </form>
            </article>
        </section>
    </section>
</template>

<script>
import { reactive } from 'vue'
import { useLogin } from '@/use/login';

export default {
    name: 'Login',
    setup() {
        const userData = reactive({ email: '', pass: '' })

        async function login() {
            await useLogin(userData)
        }

        return {
            userData,
            login
        }
    }
}
</script>

<style lang="scss" scoped>
.login-wrapper {
    padding: 10%;
}
.nav {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    .nav-text {
        margin-right: 50px;
    }

    .link-to-registration {
        cursor: pointer;
        text-decoration: none;
        color: inherit;
        padding: 10px;
        border: 1px solid inherit;
        border-radius: 20px;
        background-color: inherit;
        transition: .2s ease-in-out;

        &:hover {
            background-color: rgba($color: #ffffff, $alpha: .2);
        }
    }
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
        width: 400px;
        flex-direction: column;
        align-items: flex-end;

        .email-form, .password-form {
            width: 90%;
            margin-top: 60px;
            padding: 10px 20px;
            color: #ffffff;
            background-color: inherit;
            border: none;
            border-bottom: 2px solid #fff;
            outline: none;
        }
        .submitBtn {
            margin-top: 50px;
            width: 70px;
            padding: 10px;
            font-size: 1rem;
            cursor: pointer;
        }
    }
}

</style>