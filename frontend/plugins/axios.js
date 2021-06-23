export default function ({ $axios, store, redirect }) {
  $axios.onRequest((config) => {
    const token = store.state.auth.token

    if (token) {
      config.headers.common.Authorization = `Bearer ${token}`
    }
  })
}
