import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3001',
  // baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 3000,
  // headers: [],
})

export default instance
