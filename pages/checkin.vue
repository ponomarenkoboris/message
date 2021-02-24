<template>
    <section class="registration-wrapper">
        <article class="register__card">
            <div class="card__title">
                <p class="back__link" @click="logred">Back</p>
                <h1 class="registartion__title">Registration</h1>
            </div>
            <article class="registration__form">
                <form class="reg">
                    <input type="text" class="username" v-model="newUserData.name" placeholder="Enter your name.">
                    <input type="text" class="userId" v-model="newUserData.socialId" placeholder="Enter your Id.">
                    <input type="text" class="userEmail" v-model="newUserData.email" placeholder="Enter your email.">
                    <label class="checkPolicy">
                        <input ref="agreemant" type="checkbox" value="politicsAgrimant"/> You agree to the privacy policy.
                    </label>
                </form>
                <button @click.prevent="regUser" class="submitReg">Create new user!</button>
            </article>
        </article>
    </section>
</template>

<script>
export default {
    layout: 'empty',
    data: () => ({
        newUserData: {
            name: '',
            email: '',
            socialId: ''
        },
        agreemant: null
    }),
    methods: {
        logred() {
            this.$router.replace('/login');
        },
        regUser() {
            if (this.$refs.agreemant.checked) {
                this.$store.dispatch('registration', this.newUserData);
                if (this.$store.getters.userName === this.newUserData.name) this.$router.replace('/msb/chat');
            }
        }
    }
}
</script>

<style lang="scss" scoped>
::placeholder {
    color: #fff;
}
.registration-wrapper {
    padding-top: 10%;

    .register__card {

        .card__title {
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 100%;

            .registartion__title {
                cursor: default;
            }

            .back__link {
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
                    outline: none;
                    cursor: pointer;
                }
            }
            .submitReg {
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