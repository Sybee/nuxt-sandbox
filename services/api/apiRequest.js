import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 3000,
  // headers: [],
})

// instance.interceptors.response.use(function (response) {
//   console.log(response)
//   return response;
// }, function (error) {
//   alert(error)
//   return Promise.reject(error);
// });

// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;  EXAMPLE HOW TO INJECT HEADERS TO AXIOS INSTANCE LIKE INTERCEPTOR

export default instance
