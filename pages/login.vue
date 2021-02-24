<template>
    <section class="login-wrapper">
        <section class="card">
            <article class="nav">
                <p class="nav-text">Still not in messa?</p>
                <h3 class="link-to-registration" @click="registr">Registration</h3>
            </article>
            <article class="entry-form">
                <form class="login-form">
                    <input type="text" class="email-form" v-model="userData.email" placeholder="Enter your email...">
                    <input type="text" class="password-form" v-model="userData.password" placeholder="Entre your password...">
                    <button class="submitLogin" @click.prevent="submitLoign">Login</button>
                </form>
            </article>
        </section>
    </section>
</template>

<script>
export default {
    layout: 'empty',
    data: () => ({
        userData: {
            email: '',
            password: ''
        }
    }),
    methods: {
        registr() {
            this.$router.replace('/checkin')
        },
        submitLoign() { // complite when dats base will be ready
            this.$store.dispatch('login', this.userData.email);
            if (this.$store.getters.userName === this.userData.email) this.$router.replace('/msb/chat');
        }
    }
}
</script>

<style lang="scss" scoped>
::placeholder {
    color: #fff;
}
.login-wrapper {
    padding: 10%;
    letter-spacing: .05rem;
}
.nav {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    .nav-text {
        margin-right: 50px;
        cursor: default;
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
        .submitLogin {
            outline: none;
            background-color: inherit;
            color: #fff;
            border: none;
            border-radius: 20px;
            margin-top: 50px;
            width: 70px;
            padding: 10px;
            font-size: 1rem;
            cursor: pointer;
            transition: .22 ease-in-out;

            &:hover {
                background-color: rgba($color: #fff, $alpha: .1);
            }

            &:active {
                background-color: rgba($color: #fff, $alpha: .4);
            }
        }
    }
}
</style>