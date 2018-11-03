import Vuex from 'vuex'
import axios from 'axios';
import facebook from '../assets/services/auth/facebook'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      greeting: 'hello world!',
      connected: ''
    }),
    mutations: {
      async fetchSomething(state) {
        const response = await axios.get('/_api/provider/_functions/data');
        state.greeting = `hello ${response.data}!`;
      },
      async facebookStatus(state) {
        state.connected = await facebook.status();
      },
      async facebookLogin(state) {
        await facebook.login();
        const details = await facebook.details();
        console.log(details);
        state.greeting = `hello ${details.name}!`;
        state.connected = true;
      },
      async facebookLogout(state) {
        await facebook.logout();
        state.connected = false;
      }
    }
  })
}
export default createStore
