export const actions = {
  async nuxtServerInit ({ dispatch, commit }) {
    const token = this.$cookies.get('token')
    
    if (token) {
      try {
        await commit('auth/SET_TOKEN', token)
        await dispatch('auth/fetchUser')
      } catch (e) {
        await dispatch('auth/logout')
      }
    }
  }
}
