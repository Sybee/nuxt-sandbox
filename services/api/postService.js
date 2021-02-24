import request from './apiRequest'

export default {
  getPosts: () => request.get(`/posts`)
}
