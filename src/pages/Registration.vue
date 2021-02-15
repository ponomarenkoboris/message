<template>
    <section class="registration-wrapper">
        <article class="register__card">
            <h1 class="registartion__title">Registration</h1>
            <article class="registration__form">
                <form class="reg">
                    <input type="text" class="username" placeholder="Enter your name." v-model="userData.name">
                    <input type="text" class="userId" placeholder="Enter your Id." v-model="userData.userId">
                    <input type="text" class="userEmail" placeholder="Enter your email." v-model="userData.email">
                    <label class="checkPolicy">
                        <input type="checkbox" value="politicsAgrimant" v-model="politicsAgrimant.checked" /> You agree to the privacy policy.
                    </label>
                </form>
                <button class="registerBTN" @click="registartion">Create new user!</button>
            </article>
        </article>
    </section>
</template>

<script>
import { useRegistration } from '@/use/registration';
import { reactive } from 'vue';

export default {
    name: 'Registration',
    setup() {
        const politicsAgrimant = reactive({ checked: false })
        const userData = reactive({ name: '', email: '', userId: '' });

        async function registartion() {
            if (politicsAgrimant.checked) {
                useRegistration(userData);
            }
        }

        return {
            userData,
            registartion,
            politicsAgrimant
        }
    }
}
</script>

<style lang="scss" scoped>
$formItemMarginTop: 40px;

::placeholder {
    color: #fff;
}
.registration-wrapper {
    padding-top: 10%;

    .register__card {

        padding: 40px 10px;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
        border: 1px solid #fff;
        max-width: 500px;

        .registration__form {
            margin-top: 50px;
            display: flex;
            align-items: center;
            flex-direction: column;

            .reg {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                width: 400px;

                .username, .userId, .userEmail {
                    width: 90%;
                    margin-top: 40px;
                    padding: 10px 20px;
                    color: #ffffff;
                    background-color: inherit;
                    border: none;
                    border-bottom: 2px solid #fff;
                    outline: none;
                }
                .username {
                    margin-top: 0;
                }
                .checkPolicy  {
                    margin-top: 30px;
                    width: 240px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    cursor: pointer;
                }

                #politicsAgrimant {
                    cursor: pointer;
                }
            }
            .registerBTN {
                margin-top: 40px;
                padding: 10px 30px;
                font-size: 1rem;
                cursor: pointer;
                background: none;
                color: #fff;
                border: none;
                border-radius: 20px;
                outline: none;
                transition: .22s ease-in-out;

                &:hover {
                    background-color: rgba($color: #fff, $alpha: .1)
                }
                &:active {
                    background-color: rgba($color: #fff, $alpha: .5);
                }
            }
        }
    }
}
</style>