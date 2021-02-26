<template>
    <header class="container">
        <section class="header-wrapper" :style="{ background: theme }">
            <div class="user__name-wrapper">
                <div class="img-wrapper">
                    <img v-if="avatarUrl" :src="avatarUrl" alt="Your avatar" class="userAvatar">
                </div>
                <h1 class="userName">{{ userName }}</h1>
            </div>
            <nav class="nav-wrapper">
                <nuxt-link active-class="active" to="/messa/chat" class="header__link">MessA</nuxt-link>
                <nuxt-link active-class="active" to="/messa/profile" class="header__link">Profile</nuxt-link>
                <nuxt-link active-class="active" to="/messa/appearence" class="header__link">Appearence</nuxt-link>
                <nuxt-link active-class="active" to="/messa/settings" class="header__link">Settings</nuxt-link>
            </nav>
        </section>
    </header>
</template>

<script> 
export default {
    computed: {
        theme() {
            const colorTheme = this.$store.getters['appearence/secondaryTheme'];
            const colorStyle = `linear-gradient(to right, ${colorTheme.leftColor}, ${colorTheme.rightColor}` + ')'
            return colorStyle
        },
        userName() {
            return this.$store.getters.userName;
        },
        avatarUrl() {
            return this.$store.getters.userAvatar || ''
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    .header-wrapper {
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
        align-items: center;
        padding-right: 20px;
        padding-top: 10px;
        padding-bottom: 10px;

        .user__name-wrapper {
            display: flex;
            align-items: center;
            margin-left: 10px;
            color: #fff;
            cursor: default;

            .img-wrapper {
                width: 70px;
                height: 70px;
                overflow: hidden;
                border-radius: 50%;

                .userAvatar {
                    background-color: inherit;                
                }
            }

            .userName {
                margin-left: 20px;
            }
        }

        .nav-wrapper {
            display: flex;
            align-items: center;
            letter-spacing: 1px;

            .header__link {
                margin-left: 10px;
                margin-right: 10px;
                cursor: pointer;
                padding: 30px;
                color: #fff;
                border-radius: 20px;
                text-decoration: none;
                transition: background-color .22s;

                &:hover {
                    background-color: rgba($color: #fff, $alpha: .2);
                }
            }

            .active {
                background-color: rgba($color: #fff, $alpha: .2);
            }
        }
    }
}

</style>