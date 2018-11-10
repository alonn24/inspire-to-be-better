import Vuex from 'vuex'
import axios from 'axios';
import facebook from '../assets/services/auth/facebook'
import google from '../assets/services/auth/google'
import github from '../assets/services/auth/github'

const socialProviders = {
  google,
  facebook,
  github
};
const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      greeting: 'hello world!',
      social: {
        facebook: {
          connected: 'unknown'
        },
        google: {
          connected: 'unknown'
        },
        github: {
          connected: 'unknown'
        }
      }
    }),
    mutations: {
      async fetchSomething(state) {
        const response = await axios.get('/_api/provider/_functions/data');
        state.greeting = `hello ${response.data}!`;
      },
      async socialStatus(state, social) {
        const provider = socialProviders[social];
        state.social[social].connected = await provider.status();
      },
      async socialLogin(state, social) {
        const provider = socialProviders[social];
        await provider.login();
        const details = await provider.details();
        state.greeting = `hello ${details.name}!`;
        state.social[social].connected = true;
      },
      async socialLogout(state, social) {
        const provider = socialProviders[social];
        await provider.logout();
        state.social[social].connected = false;
      }
    }
  })
}
export default createStore
