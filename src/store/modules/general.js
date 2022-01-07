const general = {
  namespaced: true,
  state: {
    loading: false,
    error: '',
  },
  actions: {
    setLoading({ commit }, payload = true) {
      commit('SET_LOADING', payload);
    },
    setError({ commit }, payload) {
      commit('SET_ERROR', payload);
      setTimeout(() => commit('SET_ERROR', ''), 2000);
    },
  },
  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
    SET_ERROR(state, payload) {
      state.error = payload;
    },
  },
};
export default general;
