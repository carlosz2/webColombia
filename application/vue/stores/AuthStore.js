import axios from 'axios';
import { urls } from '../constants/urlConst.js';
import router from '../router.js';

const AuthStore = {

    state: {
        accessToken: null,
        loggingIn: false,
        loginError: null,
    },

    getters: {
        userToken (state) {
            return state.accessToken;
        },
    },

    mutations: {
        loginStart: state => state.loggingIn = true,
        loginStop: (state, errorMessage) => {
            state.loggingIn = false;
            state.loginError = errorMessage;
        },
        updateAccessToken: (state, accessToken) => {
            state.accessToken = accessToken;
        },
        logout: (state) => {
            state.accessToken = null;
        }
    },

    actions: {
        doLogin({ commit }, loginData) {

            commit('loginStart');

            axios.get(urls.loginToken, {
                params: {
                    identity: loginData.identity,
                    password: loginData.password
                }
            })
            .then(response => {
                localStorage.setItem('accessToken', response.data.token);
                commit('loginStop', null);
                commit('updateAccessToken', response.data.token);
                router.push('/');
            })
            .catch(error => {
                commit('loginStop', error.response.data.error);
                commit('updateAccessToken', null);
            })
        },
        fetchAccessToken({ commit }) {
            commit('updateAccessToken', localStorage.getItem('accessToken'));
        },
        logout({ commit }) {
            localStorage.removeItem('accessToken');
            commit('logout');
            router.push('/login');
        }
    }
}

export default AuthStore;