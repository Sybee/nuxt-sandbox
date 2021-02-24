<template>
  <div class="container">
    <h1>index</h1>
  </div>
</template>

<script>
// import postService from '~/services/jsonPlaceholderApi/postService'
import userService from '~/services/api/userService'

export default {
  async asyncData({ error, route, params }) {
    const { data } = await userService.getUsers()

    // console.log(data)

    return {}
  },
}
</script>
