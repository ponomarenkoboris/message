<template>
    <section class="profile" :style="{ background: theme }" >
        <section class="info-wrapper">
            <article class="profile-avatar-wrapper">
                <img :src="userData.avatar || userPhotoNew ||'' " alt="User avatar" class="info user-avatar">
                <input type="file" class="info file" @change="uploadAndRenderImg" id="file" ref="fileInput">
                <div class="info file__btn">
                    <button class="getImg" @click.prevent="choosePhoto">Choose new avatar</button>
                </div>
            </article>
            <article class="main-info-wrapper">
                <input type="text" class="info username" v-model="userName" :placeholder="userData.name">
                <input type="text" v-model="userId" class="info userid" :placeholder="'@' + userData.socialId">
                <input type="text" v-model="userEmail" class="info user-email" :placeholder="userData.email">
                <input type="text" v-model="userPhone" class="info user-phone-number" :placeholder="userData.phone">
                <div class="btn-wrapper">
                    <button class="submit-info">Submit Changes</button>
                </div>
            </article>
        </section>
    </section>
</template>
<script>
export default {
    name: 'Profile',
    data: () => ({
        userName: '',
        userId: '',
        userEmail: '',
        userPhone: '',
        userPhotoNew: ''
    }),
    computed: {
        theme() {
            const colorTheme = this.$store.getters['appearence/mainTheme'];
            const colorStyle = `linear-gradient(to right, ${colorTheme.leftColor}, ${colorTheme.rightColor}` + ')';
            return colorStyle
        },
        userData() {
            return this.$store.getters.data
        }
    },
    methods: {
        choosePhoto() {
            const accept = ['.png', '.jpg', '.jpeg'];
            this.$refs.fileInput.setAttribute('accept', accept.join(','));
            this.$refs.fileInput.click();
        },
        uploadAndRenderImg(e) {
            if (!e.target.files.length || e.target.files.length > 1) return;
            if (!e.target.files[0].type.match('image')) return;
            const reader = new FileReader();
            reader.onload = e => {
                this.userPhotoNew = e.target.result;
                this.$store.dispatch('setAvaUrl', this.userPhotoNew);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    }
}
</script>

<style lang="scss" scoped>
* {
    overflow: hidden;
}
.profile {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    height: 838px;

    .info-wrapper {
        width: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .profile-avatar-wrapper {
            display: flex;
            flex-direction: column;
        }

        .main-info-wrapper {
            display: flex;
            flex-direction: column;
        }

        .info {
            margin: 40px 50px;
            padding: 10px 25px;
            font-size: 1rem;
            outline: none;
            border: none;
            border-bottom: 1px solid #fff;
            background-color: inherit;
            color: rgba($color: #ffffff, $alpha: 1.0); 
        }

        .user-avatar {
            margin: 0;
        }

        .file__btn{
            display: flex;
            justify-content: space-around;
            padding: 0;
            margin: 40px 0;
            border: none;
            width: 100%;

            .getImg {
                cursor: pointer;
                padding: 10px 15px;
                border-radius: 50px;
                border: none;
                outline: none;
                background-color: rgba($color: #fff, $alpha: .3);
                color: #fff;
                border-radius: 50px;
                transition: .22s linear;

                &:active {
                background-color: rgba($color: #fff, $alpha: .6);
                }
            }
        }

        ::placeholder{
            color: #fff;
        }

        .user-avatar{
            background-color: #000000;
            height: 300px;
            width: 300px;
            border-radius: 50%;
        }

        .file{
            display: none;
        }

        .btn-wrapper{
            margin-top: 40px;
            padding: 0 50px;

            .submit-info {
                cursor: pointer;
                outline: none;
                border: none;
                background-color: rgba($color: #fff, $alpha: .3);
                color: #fff;
                padding: 10px 20px;
                border-radius: 50px;
                width: 100%;
                transition: .22s linear;

                &:active {
                    background-color: rgba($color: #fff, $alpha: .6);
                }
            }
        }
    }
}
</style>