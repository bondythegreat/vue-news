import Vue from 'vue';
import Vuex from 'vuex';

import general from './modules/general';
import news from './modules/news';

Vue.use(Vuex);

const store = {
  modules: {
    general,
    news,
  },
};

export default new Vuex.Store(store);
