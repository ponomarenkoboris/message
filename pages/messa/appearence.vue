<template>
  <section class="appearence" @click="dropdownControl = false">
        <article class="font-style-wrapper">
            <h3 class="font-style__title">Select font</h3>
            <div class="font-style__selector" @click="selectorHandler">
                <span class="font-style__placeholder">{{ currentFont.name }}</span>
                <p>&times;</p>
            </div>
            <div class="font-style__dropdown" v-if="dropdownControl">
                <ul class="fonts-list">
                    <li class="font-wrapper" v-for="(font, idx) in fontslist" :key="idx" @click="chooseFont(idx)">
                        <p class="font-name">{{ font.name }}</p>
                        <p class="font-example" :style="{ fontFamily: font.name }">{{ font.example }}</p>
                    </li>
                </ul>
            </div>
        </article>
        <section class="chat-config-wrapper">
            <article class="main-theme__wrapper">
                <h3 class="theme__title">Main color theme</h3>
                <div class="theme__color-picker">
                    <ColorPicker :pickerType="'main'" />
                </div>
            </article>
            <article class="chat-background__wrapper">
                <div class="background-img__wrapper">
                    <img :src="chatBackground" alt="Background photo" class="background-img">
                </div>
                <input type="file" id="file" ref="fileInput" hidden @change="uploadAndRenderImg">
                <button class="submit-chat-background" @click="selectBackHandler">Chat background image</button>
            </article>
            <article class="main-theme__wrapper">
                <h3 class="theme__title">Main color theme</h3>
                <div class="theme__color-picker">
                    <ColorPicker :pickerType="'mess'" />
                </div>
            </article>
        </section>
  </section>
</template>

<script>
import ColorPicker from '~~/components/ColorPicker';
import backgroundImg from '~~/assets/images/noimage.jpeg';

export default {
    name: 'Appearence',
    components: {
        ColorPicker
    },
    data: () => ({
        dropdownControl: false
    }),
    computed: {
        currentFont() {
            return this.$store.getters['appearence/font'];
        },
        fontslist() {
            return this.$store.getters['appearence/fontsList'];
        },
        chatBackground() {
            return  this.$store.getters['appearence/background'] || backgroundImg;
        }
    },
    methods: {
        selectorHandler() {
            setTimeout(() => {
                this.dropdownControl ? this.dropdownControl = false : this.dropdownControl = true
            }, 0);
        },
        chooseFont(id) {
            this.$store.commit('appearence/setFont', id);
        },
        uploadAndRenderImg(e) {
            if (!e.target.files.length || e.target.files.lenght > 1 || !e.target.files[0].type.match('image')) return;
            const reader = new FileReader();
            reader.onload = e => {
                this.$store.commit('appearence/setBack', e.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
        },
        selectBackHandler() {
            const accept = ['.png', '.jpg', '.jpeg'];
            this.$refs.fileInput.setAttribute('accept', accept.join(','));
            this.$refs.fileInput.click();
        }
    }
}
</script>

<style lang="scss" scoped>
.appearence {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > * {
        margin-top: 50px;
    }

    .font-style {
        &-wrapper{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 400px;
            position: relative;
        }

        &__title{
            margin-bottom: 30px;
        }

        &__selector {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            height: 30px;
            padding: 5px 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: .5px 1px 1px rgba($color: #000000, $alpha: .3);
        }

        &__dropdown {
            position: absolute;
            top: 113px;
            width: 100%;
            padding: 5px 10px;
            border: 1px solid #ccc;
            background: #fff;
            border-radius: 5px;
            box-shadow: .5px 1px 1px rgba($color: #000000, $alpha: .3);

            .fonts-list {
                list-style: none;
                padding: 0;

                .font-wrapper {
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 10px 5px;
                    border-bottom: 1px solid #ccc;
                    transition: .22s linear;

                    &:hover {
                        background: rgba($color: #ccc, $alpha: .2);
                    }
                    &:active {
                        background: rgba($color: #ccc, $alpha: .1);
                    }

                }
            }
        }
    }

    .chat-config-wrapper {
        width: 100%;
        display: flex;
        justify-content: space-around;

        .main-theme__wrapper,
        .chat-theme__wrapper {
            width: 250px;

            .theme__title {
                cursor: default;
                text-align: center;
                margin-bottom: 20px;
                padding: 10px 10px;
                border-radius: 20px;
                transition: .22s linear;
                background-color: rgba($color: #000000, $alpha: .2);
            }
        }

        .chat-background__wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            
            .submit-chat-background {
                margin-top: 20px;
                outline: none;
                cursor: pointer;
                padding: 5px 10px;
                border-radius: 20px;
                border: none;  

                &:hover {
                    background: rgba($color: #000000, $alpha: .2);
                }
                &:active {
                    background: rgba($color: #ccc, $alpha: .4);
                }
            }
        } 
    }
}
</style>