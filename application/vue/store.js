import Vue from 'vue'
import Vuex from 'vuex'
import HomeStore from './stores/HomeStore.js'
import AuthStore from './stores/AuthStore.js'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        HomeStore: HomeStore,
        AuthStore: AuthStore
    }
})

export default store;