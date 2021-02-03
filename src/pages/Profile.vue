<template>
  <section class="profile">
    <router-view></router-view>
      <section class="info-wrapper">
          <img :src="user.avatar_url || profile_src" alt="user-avatar" class="info user-avatar">
          <input type="file" class="info file" id="file" @change="uploadAndRenderImg"/>
          <div class="info file__btn">
            <button class="getImg" @click="choosePhoto">Choose new photo</button>
          </div>
          <input type="text" class="info username" v-model="newUsername" :placeholder="user.userName">
          <input type="text" class="info userid" v-model="newUserId" :placeholder="'@' + user.userId">
          <input type="text" class="info user-email" v-model="newUserEmail" :placeholder="user.userEmail">
          <input type="text" class="info user-phone-number" v-model="newPhoneNumber" :placeholder="user.phoneNumber">
          <div class="btn-wrapper">
            <button class="submitBtn" @click="chengeUserInfo">Submit Changes</button>
          </div>
      </section>
  </section>
</template>

<script>
import { reactive, ref } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'Profile',
  setup() {
    const store = useStore();
    const user = reactive({...store.state.userTest});
    const profile_src = ref('');

    // varialble to bind with v-model
    const newUsername = ref('');
    const newUserId = ref('');
    const newUserEmail = ref('');
    const newPhoneNumber = ref('');

    //TODO complite validation
    function chengeUserInfo() {
      if (!newUsername.value) return // add error message
      store.commit('changeUserName', newUsername);
      if (!newUserId.value) return 
      store.commit('changeUserId', newUserId.value);
      if (!newUserEmail.value) return
      store.commit('changeUserEmail', newUserEmail.value);
      if (!newPhoneNumber.value) return 
      store.commit('changePhoneNumber', newPhoneNumber.value)

    }

    // select photo (click on button)
    function choosePhoto() {
      const accept = ['.png', '.jpg', '.jpeg'];
      const input = document.querySelector('#file');
      input.setAttribute('accept', accept.join(','));
      input.click();
    }
    // select photo (upload on servise)
    function uploadAndRenderImg(e) {
      if (!e.target.files.length) return;
      if (!e.target.files[0].type.match('image')) return;
      const reader = new FileReader();
      reader.onload = event => {
        profile_src.value = event.target.result;
        // TODO must be uploaded on server
      }
      reader.readAsDataURL(e.target.files[0]);
    }

    return {
      user,
      chengeUserInfo,
      newUsername,
      newUserId,
      newUserEmail,
      newPhoneNumber,
      choosePhoto,
      uploadAndRenderImg,
      profile_src
    }
  }
}
</script>

<style lang="scss" scoped>

.profile{
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  background-color: rgba($color: #000000, $alpha: .7);
  padding-bottom: 50px;

  .info-wrapper {
    display: flex;
    flex-direction: column;

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

      .submitBtn {
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