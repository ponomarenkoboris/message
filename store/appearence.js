export const state = () => ({
    mainTheme: {
        leftColor: '#333333', 
        rightColor: '#333333'
    },
    messageTheme: {
        leftColor: '#333333',
        rightColor: '#333333'
    },
    fonts: [
        {
            id: 0,
            name: 'Roboto',
            example: 'Example',
            active: true
        },
        {
            id: 1,
            name: 'Lato',
            example: 'Example',
            active: false
        },
        {
            id: 2,
            name: 'Noto Sans JP',
            example: 'Example',
            active: false
        },
        {
            id: 3,
            name: 'Hammersmith One',
            example: 'Example',
            active: false
        },
        {
            id: 4,
            name: 'Raleway',
            example: 'Example',
            active: false
        }
    ],
    backgroundSrc: ''
});

export const mutations = {
    setMainColor(state, { left, right }) {
        state.mainTheme.leftColor = left;
        state.mainTheme.rightColor = right;
        sessionStorage.setItem('MainColor', JSON.stringify(state.mainTheme));
    },
    setMessageColor(state, { left, right }) {
        state.messageTheme.leftColor = left;
        state.messageTheme.rightColor = right;
        sessionStorage.setItem('MessColor', JSON.stringify(state.messageTheme));
    },
    setFont(state, idx) {
        state.fonts.forEach(item => {
            item.id === idx ? item.active = true : item.active = false;
        });
    },
    setBack(state, url) {
        state.backgroundSrc = url;
    }
}

export const getters = {
    mainTheme: state => {
        // const theme = JSON.parse(sessionStorage.getItem('MainColor'));
        // if (theme) return theme;
        return state.mainTheme
    },
    secondaryTheme: state => {
        // const theme = JSON.parse(sessionStorage.getItem('MessColor'));
        // if (theme) return theme;
        return state.messageTheme;
    },
    font: state => state.fonts.find(item => item.active),
    fontsList: state => state.fonts,
    background: state => state.backgroundSrc
}