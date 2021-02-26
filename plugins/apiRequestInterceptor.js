import instance from '../services/api/apiRequest'

export default ({ store, route }) => {
  instance.interceptors.request.use((config) => {
    store.commit('ADD_REQUEST', config)
    config.headers['X-ROUTE'] = route.fullPath
    return config
  })

  instance.interceptors.response.use((response) => {
    store.commit('REMOVE_REQUEST', response.config)
    return response
  }, function (error) {
    alert(error)

    return Promise.reject(error)
  })
}
