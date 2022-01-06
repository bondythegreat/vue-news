const news = {
  namespaced: true,
  state: {
    newsList: [],
    sourcesList: [],
    history: [],
  },
  actions: {
    /*
    GET_TOP_HEADLINES_NEWS({ commit }) {
      const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.VUE_APP_NEWS_API_KEY}`;
      commit('setNewsList', res);
    },
    GET_TOP_HEADLINES_BY_KEYWORD({ commit}, keyword) {
        const url = `https://newsapi.org/v2/top-headlines?country=us&q=${keyword}apiKey=${process.env.VUE_APP_NEWS_API_KEY}`;
        commit('setNewsList', res);
    },
    GET_HEADLINES_BY_SOURCE({ commit }, sourceId) {
      const url = `https://newsapi.org/v2/top-headlines?country=us&sources=${sourceId}apiKey=${process.env.VUE_APP_NEWS_API_KEY}`;
      commit('setNewsList', res);
    },
    GET_SOURCES_LIST({ commit }) {
      const url = `https://newsapi.org/v2/sources?apiKey=${process.env.VUE_APP_NEWS_API_KEY}`;
      commit('setSourcesList', res);
    },
    GET_WRONG_ENDPOINT() {
        const url = 'https://newsapi.org/v2/sources?apiKey';
    }
    RECORD_HISTORY({commit}, newsObj) {
        commit('setHistory', newsObj);
    }
    */
  },
  mutations: {
    setNewsList(state, payload) {
      state.newsList = payload;
    },
    setSourcesList(state, payload) {
      state.sourcesList = payload;
    },
    setHistory(state, payload) {
      const historyNow = {
        date: new Date(),
        news: payload,
      };
      state.history.push(historyNow);
    },
  },
  getters: {
    //
  },
};
export default news;
