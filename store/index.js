import vue from 'vue';
import Vuex from 'vuex';

vue.use(Vuex);

import login from './login';

export default new Vuex.Store({
    modules: {
      login
    }
})
