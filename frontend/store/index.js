export const actions = {
  async nuxtServerInit ({ dispatch, commit }, { error }) {
    const token = this.$cookies.get('token')
    
    if (token) {
      try {
        await commit('auth/SET_TOKEN', token)
        await dispatch('auth/fetchUser')
      } catch (e) {
        commit('auth/SET_USER', null)
        commit('auth/SET_TOKEN', null)
        this.$cookies.remove('token')
        this.app.router.push('/login')
      }
    }
  }
}
