import instance from '../services/api/apiRequest'

export default ({ store }) => {
  instance.interceptors.request.use((config) => {
    store.commit('ADD_REQUEST')
    return config
  })

  instance.interceptors.response.use(async (response) => {
    store.commit('REMOVE_REQUEST')
    return response
  }, function (error) {
    alert(error)
    return Promise.reject(error)
  })
}
