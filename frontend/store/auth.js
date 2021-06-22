export const state = () => ({
  submittingAuth: false
})

export const mutations = {
  SET_SUBMITTING (state, loading) { state.submittingAuth = loading }
}

export const actions = {
  async login ({ commit }, payload) {
    try {
      commit('SET_SUBMITTING', true)
      await this.$axios.post('/login', payload)
    } finally {
      commit('SET_SUBMITTING', false)
    }
  }
}
