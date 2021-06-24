export default function ({ $axios, store, redirect }) {
  $axios.onRequest((config) => {
    const { token } = store.state.auth

    if (token) {
      config.headers.common.Authorization = `Bearer ${token}`
    }
  })
}
