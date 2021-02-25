export const state = () => ({
    messages: [
        {
            name: 'Boris',
            text: 'hellow world!!'
        },
        {
            name: 'Farhat',
            text: 'hellow dsajfjhgsdfjk!!'
        },
        {
            name: 'Ganop',
            text: 'hellow worsgfdfgsgld!!'
        },
        {
            name: 'Rick',
            text: `hellow !!`
        },
        {
            name: 'Josh',
            text: 'sdckjlsdafl;j world!!'
        }
    ],
});

export const mutations = {
    addMessage(state, item){
        state.messages.push(item);
    }
};

export const getters = {
    messages: state => state.messages
}