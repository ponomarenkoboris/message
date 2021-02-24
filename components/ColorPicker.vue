<template>
    <article class="container" :id="pickerType">
        <div class="info" ref="info">
            <div class="input-wrapper">
                <div class="left-side-color">
                    <input type="color" ref="leftColor" class="leftColor" @input="changeColor"/>
                    <p>Left side</p>
                </div>
                <div class="right-side-color">
                    <input type="color" ref="rightColor" class="rightColor" @input="changeColor"/>
                    <p>Right side</p>
                </div>
            </div>
            <div class="change-wrapper">
                <h3>Selected Color</h3>
                <div class="selected" ref="selected"></div>
                <button v-if="notDefaultColor" class="btn-submit-color" @click="submitColor">Pick color</button>
                <p v-if="successPicked" class="success">Picked!</p>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    name: 'ColorPicker',
    props: {
        pickerType: {
            type: String,
            required: true
        }
    },
    data: () => ({
        notDefaultColor: false,
        successPicked: false,
        theme: {}
    }),
    methods: {
        changeColor() {
            const { selected, leftColor, rightColor } = this.$refs;
            selected.style.background = "linear-gradient(to right, " + leftColor.value + ", " + rightColor.value + ")";
            this.notDefaultColor = true;
            this.theme = { left: leftColor.value, right: rightColor.value };
        },
        submitColor() {
            if(this.$props.pickerType === 'main') this.$store.commit('appearence/setMainColor', this.theme);
            if(this.$props.pickerType === 'mess') this.$store.commit('appearence/setMessageColor', this.theme);
            this.successPicked = true;
            setTimeout(() => {
                this.successPicked = false;
            }, 1500);
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 200px;

    .info {
        width: 12em;
        display: flex;
        flex-direction: column;
        align-items: center;

        .input-wrapper {
            display: flex;
            justify-content: space-between;
            width: 100%;

            .left-side-color, .right-side-color{
                display: flex;
                flex-direction: column;
                align-items: center;

                .leftColor, .rightColor {
                    cursor: pointer;
                    border: none;
                    padding: 0;
                    width: 75px;
                    height: 50px;
                }

                & > p {
                    cursor: default;
                    font-size: .9rem;
                }
            }

        }
    }
    .change-wrapper {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;

        & > h3, .selected {
            margin-top: 10px;
        }

        .selected {
            width: 250px;
            height: 100px;
            background: #000;
        }

        .btn-submit-color {
            cursor: pointer;
            margin-top: 30px;
            padding: 10px 15px;
            outline: none;
            border: none;
            border-radius: 20px;

            &:hover {
                background: rgba($color: #000000, $alpha: .2);
            }
            &:active {
                background: rgba($color: #ccc, $alpha: .4);
            }
        }
        .success {
            margin-top: 10px;
            font-size: .9rem;
            padding: 1.5px 6px;
            color: #fff;
            background: rgba($color: #000000, $alpha: .6);
            border-radius: 5px;
        }
    }
}
</style>