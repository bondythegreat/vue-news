import axios from 'axios';

const news = {
  namespaced: true,
  state: {
    masterList: [],
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
          dispatch('general/setError', `ERROR WHEN CALL ENDPOINT. MESSAGE: ${err.message}`, {
            root: true,
          });
        })
        .finally(() => {
          dispatch('general/setLoading', false, { root: true });
        });
    },

    getTopHeadlinesByKeyword({ commit, dispatch }, keyword) {
      const url = `https://newsapi.org/v2/top-headlines?q=${keyword}&apiKey=${process.env.VUE_APP_NEWS_API_KEY}`;

      dispatch('general/setLoading', true, { root: true });
      axios
        .get(url)
        .then((res) => {
          commit('SET_NEWS_LIST', res.data);
        })
        .catch((err) => {
          dispatch('general/setError', `ERROR WHEN CALL ENDPOINT. MESSAGE: ${err.message}`, {
            root: true,
          });
        })
        .finally(() => {
          dispatch('general/setLoading', false, { root: true });
        });
    },

    getHeadlinesBySource({ commit }, sourceId) {
      commit('SET_FILTERED_LIST', sourceId);
    },
    resetFilteredList({ commit }) {
      commit('RESET_FILTERED_LIST');
    },
    getSourcesList({ commit, dispatch }) {
      const url = `https://newsapi.org/v2/sources?apiKey=${process.env.VUE_APP_NEWS_API_KEY}`;

      dispatch('general/setLoading', true, { root: true });
      axios
        .get(url)
        .then((res) => {
          commit('SET_SOURCES_LIST', res.data);
        })
        .catch((err) => {
          dispatch('general/setError', `ERROR WHEN CALL ENDPOINT. MESSAGE: ${err.message}`, {
            root: true,
          });
        })
        .finally(() => {
          dispatch('general/setLoading', false, { root: true });
        });
    },

    setNewsTitle({ commit }, payload) {
      commit('CHANGE_NEWS_TITLE', payload);
    },
    getWrongEndpoint({ commit, dispatch }) {
      const url = 'https://newsapi.org/v2/sources?apiKey';
      axios
        .get(url)
        .then((res) => {
          commit('SET_SOURCES_LIST', res.data);
        })
        .catch((err) => {
          dispatch('general/setError', `ERROR WHEN CALL ENDPOINT. MESSAGE: ${err.message}`, {
            root: true,
          });
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
      state.masterList = articles;
      state.newsList = articles;
      state.totalResults = totalResults;
    },
    SET_FILTERED_LIST(state, sourceId) {
      const filteredList = state.masterList.filter((item) => item.source.id === sourceId);
      state.newsList = filteredList;
    },
    RESET_FILTERED_LIST(state) {
      state.newsList = state.masterList;
    },
    SET_SOURCES_LIST(state, { sources }) {
      state.sourcesList = sources;
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
    getHistoryDesc(state) {
      // clone and reverse
      const reversedList = [...state.history].reverse();
      return reversedList;
    },
  },
};
export default news;
