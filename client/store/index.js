import Vuex from 'vuex'
import axios from 'axios';
import facebook from '../assets/services/auth/facebook'
import google from '../assets/services/auth/google'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      greeting: 'hello world!',
      facebookConnected: 'unknown',
      googleConnected: 'unknown'
    }),
    mutations: {
      async fetchSomething(state) {
        const response = await axios.get('/_api/provider/_functions/data');
        state.greeting = `hello ${response.data}!`;
      },
      async facebookStatus(state) {
        state.facebookConnected = await facebook.status();
      },
      async facebookLogin(state) {
        await facebook.login();
        const details = await facebook.details();
        state.greeting = `hello ${details.name}!`;
        state.facebookConnected = true;
      },
      async facebookLogout(state) {
        await google.logout();
        state.facebookConnected = false;
      },
      async googleStatus(state) {
        state.googleConnected = await google.status();
      },
      async googleLogin(state) {
        await google.login();
        const details = await google.details();
        state.greeting = `hello ${details.name}!`;
        state.googleConnected = true;
      },
      async googleLogout(state) {
        await google.logout();
        state.googleConnected = false;
      }
    }
  })
}
export default createStore
