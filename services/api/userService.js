import request from './apiRequest'

export default {
  getUsers: () => request.get(`/users1`)
}
