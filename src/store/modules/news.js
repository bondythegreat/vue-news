import axios from 'axios';

const news = {
  namespaced: true,
  state: {
    newsList: [],
    totalResults: null,
    sourcesList: [],
    history: [],
  },
  actions: {
    getTopHeadlines({ commit, dispatch }) {
      const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.VUE_APP_NEWS_API_KEY}`;

      dispatch('general/setLoading', true, { root: true });
      axios
        .get(url)
        .then((res) => {
          commit('SET_NEWS_LIST', res.data);
        })
        .catch((err) => {
          console.log('ERROR', err);
          dispatch('general/setError', 'ERROR WHEN CALL ENDPOINT', { root: true });
        })
        .finally(() => {
          dispatch('general/setLoading', false, { root: true });
        });
    },

    getTopHeadlinesByKeyword({ commit, dispatch }, keyword) {
      const url = `https://newsapi.org/v2/top-headlines?country=us&q=${keyword}apiKey=${process.env.VUE_APP_NEWS_API_KEY}`;

      dispatch('general/setLoading', true, { root: true });
      axios
        .get(url)
        .then((res) => {
          commit('SET_NEWS_LIST', res.data);
        })
        .catch((err) => {
          console.log('ERROR', err);
          dispatch('general/setError', 'ERROR WHEN CALL ENDPOINT', { root: true });
        })
        .finally(() => {
          dispatch('general/setLoading', false, { root: true });
        });
    },

    getHeadlinesBySource({ commit, dispatch }, sourceId) {
      const url = `https://newsapi.org/v2/top-headlines?country=us&sources=${sourceId}apiKey=${process.env.VUE_APP_NEWS_API_KEY}`;

      dispatch('general/setLoading', true, { root: true });
      axios
        .get(url)
        .then((res) => {
          commit('SET_NEWS_LIST', res.data);
        })
        .catch((err) => {
          console.log('ERROR', err);
          dispatch('general/setError', 'ERROR WHEN CALL ENDPOINT', { root: true });
        })
        .finally(() => {
          dispatch('general/setLoading', false, { root: true });
        });
    },

    getSourcesList({ commit, dispatch }) {
      const url = `https://newsapi.org/v2/sources?apiKey=${process.env.VUE_APP_NEWS_API_KEY}`;

      dispatch('general/setLoading', true, { root: true });
      axios
        .get(url)
        .then((res) => {
          commit('SET_SOURCES_LIST', res);
        })
        .catch((err) => {
          console.log('ERROR', err);
          dispatch('general/setError', 'ERROR WHEN CALL ENDPOINT', { root: true });
        })
        .finally(() => {
          dispatch('general/setLoading', false, { root: true });
        });
    },

    setNewsTitle({ commit }, { newsItem, newTitle }) {
      commit('CHANGE_NEWS_TITLE', { newsItem, newTitle });
    },
    getWrongEndpoint({ commit, dispatch }) {
      const url = 'https://newsapi.org/v2/sources?apiKey';
      axios
        .get(url)
        .then((res) => {
          commit('SET_SOURCES_LIST', res);
        })
        .catch((err) => {
          console.log('ERROR', err);
          dispatch('general/setError', 'ERROR WHEN CALL ENDPOINT', { root: true });
        })
        .finally(() => {
          dispatch('general/setLoading', false, { root: true });
        });
    },
    recordHistory({ commit }, newsObj) {
      commit('SET_HISTORY', newsObj);
    },
  },
  mutations: {
    SET_NEWS_LIST(state, { articles, totalResults }) {
      state.newsList = articles;
      state.totalResults = totalResults;
    },
    SET_SOURCES_LIST(state, payload) {
      state.sourcesList = payload;
    },
    CHANGE_NEWS_TITLE(state, { newsItem, newTitle }) {
      state.newsList.find((item) => item.title === newsItem.title).title = newTitle;
    },
    SET_HISTORY(state, payload) {
      const historyNow = {
        date: new Date(),
        news: payload,
      };
      state.history.push(historyNow);
    },
  },
  getters: {
    getDetail(state) {
      return (idx) => state.newsList[idx];
    },
  },
};
export default news;
