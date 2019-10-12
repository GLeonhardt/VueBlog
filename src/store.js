import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    post: [],
    qtd: 0
  },
  mutations: {
    ADD_POST: async (state, payload) => {
      state.post.push(payload);
      qtd++;
    }
  },
  actions: {

  }
})
