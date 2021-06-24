export const state = () => ({
  submittingAuth: false,

  user: null,
  token: '',

  error: null
})

export const mutations = {
  SET_SUBMITTING (state, loading) { state.submittingAuth = loading },

  SET_USER (state, user) { state.user = user },
  SET_TOKEN (state, token) { state.token = token },

  SET_ERROR (state, error) { state.error = error },
  CLEAR_ERROR (state) { state.error = null }
}

export const actions = {
  async login ({ commit }, payload) {
    try {
      commit('CLEAR_ERROR')
      commit('SET_SUBMITTING', true)

      const { data } = await this.$axios.post('/auth/login', payload)
      
      this.$cookies.set('token', data.token, {
        maxAge: 60 * 60
      })
      commit('SET_TOKEN', data.token)
      commit('SET_USER', data.user)

      if (data.user.role.name === 'ADMIN') {
        this.app.router.push('/admin')
      } else {
        this.app.router.push('/home')
      }
    } catch (err) {
      // console.log(err)
      commit('SET_ERROR', err.response.data)
    } finally {
      commit('SET_SUBMITTING', false)
    }
  },
  async fetchUser ({ commit }) {
    const { data } = await this.$axios.get('/auth/me')
    
    commit('SET_USER', data.user)
  },
  async logout ({ commit }) {
    await this.$axios.get('/auth/logout')
    commit('SET_USER', null)
    commit('SET_TOKEN', null)
    this.$cookies.remove('token')
    this.app.router.push('/login')
  }
}

export const getters = {
  isLoggedIn: (state) => {
    return !!state.user
  }
}
