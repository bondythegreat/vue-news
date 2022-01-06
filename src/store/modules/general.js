const general = {
  namespaced: true,
  state: {
    loading: false,
  },
  actions: {
    SET_LOADING({ commit }, payload = true) {
      commit('setLoading', payload);
    },
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
  },
};
export default general;
