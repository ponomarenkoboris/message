<template>
  <section class="profile">
    <router-view></router-view>
      <section class="info-wrapper">
          <img :src="User.avatar" alt="user-avatar" class="info user-avatar">
          <input type="text" class="info username" :placeholder="User.userName">
          <input type="text" class="info userid" :placeholder="'@' + User.userId">
          <input type="text" class="info user-email" :placeholder="User.userEmail">
          <input type="text" class="info user-phone-number" :placeholder="User.userPhoneNumber">
      </section>
  </section>
</template>

<script>
import { reactive } from 'vue';
export default {
  name: 'Profile',
  setup() {
    const User = reactive({
      avatar: '',
      userName: 'Boris Ponomarenko',
      userId: 'borisPo',
      userEmail: 'boris@gmail.com',
      userPhoneNumber: '+7-903-268-29-60'
    })
    return {
      User
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