<template>
  <div class="container">
    <h1>Users page</h1>
    <button type="button" @click="fetchData">Go</button>

    <div v-if="loading">Loading...</div>

    <template v-else>
      <table border="1">
        <tr v-for="(user, index) in users1" :key="index">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
        </tr>
      </table>
      <table border="1">
        <tr v-for="(user, index) in users2" :key="index">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
        </tr>
      </table>
    </template>

  </div>
</template>

<script>
import userService from '~/services/api/userService'

export default {
  data: () => ({
    loading: false,
    users1: [],
    users2: [],
  }),
  methods: {
    async fetchData() {
      try {
        this.loading = true

        this.users1 = []
        this.users2 = []

        const responseOne = await userService.getUsers()
        const responseTwo = await userService.getUsers()

        setTimeout(() => {
          this.users1 = responseOne.data
          this.users2 = responseTwo.data
        }, 1000)
      } catch (error) {
        setTimeout(() => {
          console.log(error)
        }, 1000);
      } finally {
        setTimeout(() => {
          this.loading = false
        }, 1000);
      }
    }
  },
}
</script>
