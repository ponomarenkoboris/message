export const state = () => ({
    messages: [
        {
            name: 'Boris',
            text: 'hellow world!!',
            owner: false
        },
        {
            name: 'Farhat',
            text: 'hellow dsajfjhgsdfjk!!',
            owner: false
        },
        {
            name: 'Ganop',
            text: 'hellow worsgfdfgsgld!!',
            owner: false
        },
        {
            name: 'Rick',
            text: `hellow !!`,
            owner: false
        },
        {
            name: 'Josh',
            text: 'sdckjlsdafl;j world!!',
            owner: false
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