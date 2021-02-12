export const Appear = {
    state: {
        themes: {
            main: {
                leftColor: '#000',
                rightColor: '#000'
            },
            messege: {
                leftColor: '#000',
                rightColor: '#000'
            }
        },
        fonts: [
            {
                name: 'Roboto',
                example: 'Example',
                active: true
            },
            {
                name: 'Lato',
                example: 'Example',
                active: false
            },
            {
                name: 'Noto Sans JP',
                example: 'Example',
                active: false
            },
            {
                name: 'Hammersmith One',
                example: 'Example',
                active: false
            },
            {
                name: 'Raleway',
                example: 'Example',
                active: false
            }
        ]
        
    },
    mutations: {
        changeFont(state, fontName) {
            state.fonts.forEach(item => {
                if (item.name === fontName) return item.active = true;
                item.active = false;
            });
        },

        changeMainTheme(state, colorConfig) {
            state.themes.main.leftColor = colorConfig.leftColor;
            state.themes.main.rightColor = colorConfig.rightColor;
            console.log('mainTheme: ', state.themes.main);
        },

        changeMessageTheme(state, colorConfig) {
            state.themes.messege.leftColor = colorConfig.leftColor;
            state.themes.messege.rightColor = colorConfig.rightColor;
            console.log('messTheme: ', state.themes.messege);
        }
    }
} 