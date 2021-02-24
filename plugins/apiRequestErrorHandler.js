import axiosApiInstance from '../services/api/apiRequest'

export default ({  }) => {
  axiosApiInstance.interceptors.response.use((response) => {
    return response
  }, (error) => {
    return Promise.reject(error)
  })
}
