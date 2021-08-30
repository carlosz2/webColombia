const HomeStore = {

    state: {
        message: ""
    },

    getters: {
        getMessage (state) {
            return state.message;
        }
    },

    mutations: {
        setMessage (state, payload) {
            return state.message = payload;
        }
    },

    actions: {
        setMessage (context, payload) {
            context.commit('setMessage',payload);
        }
    }
}

export default HomeStore;