import { createStore } from "vuex";
// test front end logic
export default createStore({
  state: {
    user: {
      avatar_url: '',
      userName: 'Boris Ponomarenko',
      userId: 'borispon',
      userEmail: 'boris@gmail.com',
      phoneNumber: '+7-903-268-29-60'
    }
  },
  mutations: {
    changeAvatarUrl(state, newAvatar) {
      state.user.avatar_url = newAvatar;
    },
    changeUserName(state, newUserName) {
      state.user.userName = newUserName;
    },
    changeUserId(state, newUserId) {
      state.user.userId = newUserId;
    },
    changeUserEmail(state, newUserEmail) {
      state.user.userEmail = newUserEmail;
    },
    changePhoneNumber(state, newPhoneNumber) {
      state.user.phoneNumber = newPhoneNumber;
    },
  },
  actions: {},
  modules: {}
});
