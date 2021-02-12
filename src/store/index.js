import { createStore } from "vuex";
import { Appear } from './appearenceModul';

export default createStore({
  modules: { 
    appearance: Appear 
  },
  state: {
    userTest: {
      avatar_url: '',
      userName: 'Boris Ponomarenko',
      userId: 'borispon',
      userEmail: 'boris@gmail.com',
      phoneNumber: '+7-903-268-29-60'
    },
    // delete while server will be done
    messagesTest: [
      {
        name: 'boris',
        text: 'hellow world'
      },
      {
        name: 'john',
        text: 'ihefuewihhguirt'
      },
      {
        name: 'ali',
        text: 'kdjsk;lfgjsdjfd;'
      }
    ],
    
  },
  mutations: {
    changeAvatarUrl(state, newAvatar) {
      state.userTest.avatar_url = newAvatar;
    },
    changeUserName(state, newUserName) {
      state.userTest.userName = newUserName;
    },
    changeUserId(state, newUserId) {
      state.userTest.userId = newUserId;
    },
    changeUserEmail(state, newUserEmail) {
      state.userTest.userEmail = newUserEmail;
    },
    changePhoneNumber(state, newPhoneNumber) {
      state.userTest.phoneNumber = newPhoneNumber;
    },
    addMessage(state, newMessage) {
      state.messagesTest.push(newMessage);
    }   
  },
  actions: {},
});
