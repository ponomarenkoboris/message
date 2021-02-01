<template>
  <section class="profile">
    <router-view></router-view>
      <section class="info-wrapper">
          <img :src="user.avatar_url" alt="user-avatar" class="info user-avatar">
          <input type="text" class="info username" v-model="newUsername" :placeholder="user.userName">
          <input type="text" class="info userid" v-model="newUserId" :placeholder="'@' + user.userId">
          <input type="text" class="info user-email" v-model="newUserEmail" :placeholder="user.userEmail">
          <input type="text" class="info user-phone-number" v-model="newPhoneNumber" :placeholder="user.phoneNumber">
          <button class="submitBtn" @click="chengeUserInfo">Submit Changes</button>
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

    return {
      user,
      chengeUserInfo,
      newUsername,
      newUserId,
      newUserEmail,
      newPhoneNumber
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

  .info-wrapper {
    display: flex;
    flex-direction: column;

    .info {
      margin: 40px 50px;
      outline: none;
    }

    .user-avatar{
      background-color: #000000;
      height: 300px;
      width: 300px;
      border-radius: 50%;
    }
  }
}
</style>