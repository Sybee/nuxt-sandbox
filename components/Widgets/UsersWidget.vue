<template>
  <div>
    <v-fade-transition mode="out-in">
      <v-skeleton-loader v-if="loading" class="elevation-2 mb-6" boilerplate type="article, actions"></v-skeleton-loader>
      <v-card v-else>
        <v-card-title>Users Widget</v-card-title>
        <v-card-text>
          <v-simple-table>
            <thead>
              <tr>
                <th class="text-left">ID</th>
                <th class="text-left">Name</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-card-text>
      </v-card>
    </v-fade-transition>
  </div>
</template>

<script>
import userService from '@/services/api/userService'

export default {
  data: () => ({
    loading: false,
    users: [],
  }),
  async created() {
    try {
      this.loading = true

      const { data } = await userService.getUsers()

      this.users = data
    } catch (error) {
      console.log(error)
    } finally {
      this.loading = false
    }
  },
}
</script>

<style>

</style>
