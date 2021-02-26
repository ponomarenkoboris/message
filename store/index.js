export const state = () => ({
    userData: {
        name: 'Boris Ponomarenko',
        phone: '89032682960',
        socialId: 'borpon4783',
        email: 'boiris@gmail.com',
        avatar: '',
    },
    token: null
});

export const mutations = {
    setUserName(state, username){
        state.userData.name = username;
    },
    setToken(state, userToken) {
        state.token = userToken;
    },
    clearToken(state) {
        state.token = null;
    },
    setUserData(state, userData) {
        const { name, email, socialId } = userData;
        state.userData.name = name;
        state.userData.email = email;
        state.userData.socialId = socialId;
    },
    setAvatar(state, avatarUrl) {
        state.userData.avatar = avatarUrl;
    }
};

export const actions = {
    nuxtServerInit({ dispatch }) {
        dispatch('login');
    },
    login({ commit }, name) {
        commit('setUserName', name)
        commit('setToken', 'TOKENTOKEN');
    },
    logout({ commit }) {
        commit('clearToken')
    },
    registration({ commit }, dataObj) {
        commit('setUserData', dataObj);
        commit('setToken', 'TOKENTOKEN');
    },
    setAvaUrl({ commit }, avatarUrl) {
        commit('setAvatar', avatarUrl)
    }
};

export const getters = {
    userName: state => state.userData.name,
    token: state => state.token,
    userAvatar: state => state.userData.avatar,
    data: state => state.userData
};