import instance from '../services/api/apiRequest'

export default ({ store }) => {
  // Request interceptor
  instance.interceptors.request.use((config) => {
    store.commit('ADD_REQUEST')
    return config
  }, (error) => {
    return Promise.reject(error)
  })

  // Response interceptor
  instance.interceptors.response.use((response) => {
    store.commit('REMOVE_REQUEST')
    return response
  }, (error) => {
    alert('Response error')
    return Promise.reject(error)
  })
}
